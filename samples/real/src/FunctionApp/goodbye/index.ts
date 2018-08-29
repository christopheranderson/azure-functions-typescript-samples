import {IFunctionRequest, HttpContext} from "azure-functions-typescript";

export async function run (context: HttpContext, req: IFunctionRequest): Promise<string> {
    return "Goodbye";
};