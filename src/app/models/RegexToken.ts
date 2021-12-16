export class RegexToken {
    public constructor(
        public name: string,
        public color: string,
        public borderColor: string,
        public acceptsChildren: boolean,
        public children: RegexToken[] = [],) {
    }
}
