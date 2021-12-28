export class RegexCompilationResult {
    public outputRegex = "//g";
    public testingRegex?: RegExp;

    public generalErrors: string[] = [];
    public errors: Map<string, string> = new Map<string, string>();
}
