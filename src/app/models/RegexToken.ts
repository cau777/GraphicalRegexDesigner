export class RegexToken {
    public constructor(
        public name: string,
        public color: string,
        public borderColor: string,
        public acceptsChildren: boolean,
        public children: RegexToken[] = [],) {
    }

    public clone(): RegexToken {
        return new RegexToken(this.name, this.color, this.borderColor, this.acceptsChildren, []);
    }
}
