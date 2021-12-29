export interface ITokenBuilder {
    compiler: {
        getCompiledVariable(name: string): string;
    };
}
