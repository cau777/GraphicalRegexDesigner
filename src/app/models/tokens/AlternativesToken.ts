import {RegexToken} from "../RegexToken";
import {AllChars, Digits} from "../../misc/string-constants";

export abstract class AlternativesToken extends RegexToken {
    private static readonly uniqueInSetIgnored = new Set(["\\"]);

    protected compileAndConcatUnique() {
        const all = this.compileAndConcatChildren();
        const alreadyUsed = new Set();
        let result = "";

        for (const char of all) {
            if (alreadyUsed.has(char)) continue;
            if (!AlternativesToken.uniqueInSetIgnored.has(char))
                alreadyUsed.add(char);
            result += char;
        }

        return result;
    }

    protected simplify(s: string) {
        const replaced = s.replace(AllChars, "\\w").replace(Digits, "\\d");
        const replacedLen = replaced.length;
        let result = "";

        let i = 0;
        while (i < replacedLen) {
            const start = replaced.charAt(i);
            let end = start;

            const startCode = replaced.charCodeAt(i);
            let sequenceLen = 0;

            while (sequenceLen + i < replacedLen) {
                const pos = sequenceLen + i;
                if (replaced.charCodeAt(pos) - sequenceLen !== startCode) break;
                end = replaced.charAt(pos);
                sequenceLen++;
            }

            if (sequenceLen === 1)
                result += start;
            else if (sequenceLen === 2)
                result += start + "" + end;
            else
                result += start + "-" + end;

            i += sequenceLen;
        }

        return result;
    }
}
