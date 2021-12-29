import {DirectGraph} from "./models/DirectGraph";
import {VariableReferenceToken} from "./models/tokens/VariableReferenceToken";
import {MainToken} from "./models/tokens/MainToken";
import {RegexOptions} from "./models/RegexOptions";
import {RegexCompilationResult} from "./models/RegexCompilationResult";

export class RegexCompiler {
    public compiledVariables: Map<string, string>;
    public result: RegexCompilationResult;

    private readonly variables: Map<string, MainToken>;

    public constructor(variables: Map<string, MainToken>) {
        this.result = new RegexCompilationResult();
        this.compiledVariables = new Map<string, string>();
        this.variables = variables;
    }

    public compile(options: RegexOptions) {
        let graph = this.createGraph();
        let cycles = graph.getCycles();
        let connectedVariables = cycles.filter(o => o.length > 1);

        if (connectedVariables.length > 0) {
            this.result.generalErrors = connectedVariables.map(o => "Variables '" + o.join("', '") + "' form a circular dependency");
            return;
        }

        let order = graph.getOrderFor("Regex");
        for (let step of order) {
            try {
                this.compiledVariables.set(step, this.variables.get(step)!.compile());
            } catch (e) {
                this.result.errors.set(step, e as string);
                return;
            }
        }

        let regex = this.getCompiledVariable("Regex");

        if (options.assertStart)
            regex = "^" + regex;

        if (options.assertEnd)
            regex += "$";

        this.result.outputRegex = this.finishCompilingOutput(regex, options);
        this.result.testingRegex = this.finishCompilingTesting(regex, options);
    }

    private finishCompilingOutput(regex: string, options: RegexOptions) {
        if (options.escapeBackslashes)
            regex = this.escapeBackslashes(regex);
        regex = this.replaceSpecialCharacters(regex);
        regex = "/" + regex + "/" + this.createFlagsString(options);

        return regex;
    }

    private finishCompilingTesting(regex: string, options: RegexOptions) {
        if (regex.length === 0) return undefined;

        return new RegExp(regex, this.createFlagsString(options));
    }

    private escapeBackslashes(regex: string) {
        return regex.replace(/\\/g, "\\\\");
    }

    private replaceSpecialCharacters(regex: string) {
        return regex
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t");
    }

    private createGraph() {
        let result = new DirectGraph<string>();
        result.addNode("Regex");

        for (let value of this.variables.values()) {
            let variables = value.allChildren.filter(o => o instanceof VariableReferenceToken);
            for (let variable of variables) {
                result.addEdge(value.name, variable.name);
            }
        }

        return result;
    }

    private createFlagsString(options: RegexOptions) {
        let flags = "";
        if (!options.onlyFirst) flags += "g";
        if (options.caseInsensitive) flags += "i";
        return flags;
    }

    public getCompiledVariable(name: string) {
        let found = this.compiledVariables.get(name);
        if (found === undefined) throw new RangeError(name + " was not compiled");
        return found;
    }
}
