import fetch, {Response} from "node-fetch";
import {IFunctionRequest, HttpContext} from "azure-functions-typescript";

export async function run (context: HttpContext, req: IFunctionRequest): Promise<string> {
    const peopleId: string = req.query.people || "1";
    const response: Response = await fetch(`https://swapi.co/api/people/${peopleId}`);
    return response.text(); // returning from Node.js is only supported for the function.json binding with "$return" as the name
};