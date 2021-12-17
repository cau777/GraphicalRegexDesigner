export abstract class RegexToken {
    private static readonly light = 60;
    public readonly centerColor: string;
    public readonly header: (string | "input")[];
    public values: string[];

    protected constructor(
        public readonly name: string,
        public readonly borderColor: string,
        public readonly acceptsChildren: boolean,
        public readonly children: RegexToken[] = [],) {

        this.centerColor = RegexToken.lightenColor(this.borderColor);
        this.header = [];
        this.values = [];

        let index = name.indexOf("{}");
        let start = 0;

        while (index !== -1) {
            this.values.push("");
            this.header.push(name.substring(start, index));
            this.header.push("input");
            start = index + 2;
            index = name.indexOf("{}", start);
        }

        let rest = name.substring(start);
        if (rest) this.header.push(rest);
    }

    public abstract compile(): string;

    protected abstract createInstance(): RegexToken;

    public clone(): RegexToken {
        const target = this.createInstance();
        target.values = [...this.values];
        return target;
    }

    protected compileAndConcatChildren() {
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
}
