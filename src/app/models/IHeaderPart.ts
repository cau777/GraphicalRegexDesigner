export interface IHeaderPart {
    type: "text" | "newline" | "input";
    index?: number;
    content?: string;
}
