import {RegexOptions} from "./RegexOptions";

export interface ITokenSaveData {
    type: string;
    name: string;
    children: ITokenSaveData[];
    values: string[];
}

export interface IExpressionSaveData {
    name: string;
    size: number;
    lastModified: string;
    options: RegexOptions;
    variables: ITokenSaveData[];
}
