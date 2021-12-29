import {IHeaderPart} from "./IHeaderPart";
import {ITokenBuilder} from "./ITokenBuilder";

export abstract class RegexToken {
    private static readonly light = 60;
    public readonly centerColor: string;
    public header!: IHeaderPart[];
    public values!: string[];
    private _name!: string;

    // Exception constants
    protected cantBeEmpty = () => this.name + " can't be empty";
    protected mustHaveChildren = () => this.name + " must have children";
    protected atLeast2Children = () => this.name + " must at least two children";
    protected invalidMin = () => "Invalid minimum value at " + this.name;
    protected invalidMax = () => "Invalid maximum value at " + this.name;
    protected invalidVal = () => "Invalid value at " + this.name;

    protected constructor(name: string,
                          public readonly borderColor: string,
                          public readonly acceptsChildren: boolean,
                          protected readonly builder: ITokenBuilder,
                          public readonly children: RegexToken[] = []) {
        this.name = name;
        this.centerColor = RegexToken.lightenColor(this.borderColor);
    }

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
        this.updateHeader();
    }

    private updateHeader() {
        this.header = [];
        this.values = [];

        let index = this._name.indexOf("{}");
        let start = 0;
        let inputIndex = 0;

        while (index !== -1) {
            this.values.push("");
            let text = this._name.substring(start, index)
            this.header.push(...RegexToken.separateNewLines(text));
            this.header.push({type: "input", index: inputIndex++});
            start = index + 2;
            index = this._name.indexOf("{}", start);
        }

        let rest = this._name.substring(start);
        if (rest) this.header.push(...RegexToken.separateNewLines(rest));
    }

    public abstract tooltip(): string | undefined;

    public abstract compile(): string;

    protected abstract createInstance(): RegexToken;

    public clone(): RegexToken {
        const target = this.createInstance();
        target.values = [...this.values];
        return target;
    }

    protected compileAndConcatChildren() {
        if (this.children.length === 0) return "";
        return this.children.map(o => o.compile()).reduce((s1, s2) => s1 + s2);
    }

    private static lightenColor(hex: string) {
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        r = Math.min(Math.round(r + RegexToken.light), 255);
        g = Math.min(Math.round(g + RegexToken.light), 255);
        b = Math.min(Math.round(b + RegexToken.light), 255);

        let sr = r.toString(16);
        let sg = g.toString(16);
        let sb = b.toString(16);

        if (sr.length === 1) sr = "0" + sr;
        if (sg.length === 1) sg = "0" + sg;
        if (sb.length === 1) sb = "0" + sb;

        return "#" + sr + sg + sb;
    }

    private static separateNewLines(text: string): IHeaderPart[] {
        let parts = text.split("\n");
        let results: IHeaderPart[] = [];

        for (let i = 0; i < parts.length; i++) {
            results.push({type: "text", content: parts[i]});
            if (i !== parts.length - 1)
                results.push({type: "newline"});
        }

        return results;
    }
}
