export class RegexCompilationResult {
    public outputRegex = "";
    public testingRegex = "";

    public generalErrors: string[] = [];
    public errors: Map<string, string> = new Map<string, string>();
}
