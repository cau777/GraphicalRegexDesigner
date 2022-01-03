import {MainToken} from "./tokens/MainToken";
import {RegexOptions} from "./RegexOptions";

export interface IExpressionSaveData {
    name: string;
    lastModified: Date;
    options: RegexOptions;
    variables: MainToken[];
}
