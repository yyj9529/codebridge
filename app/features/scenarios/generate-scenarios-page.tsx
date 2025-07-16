import { z } from "zod";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
//import { adminClient } from "~/supa-client";
//import { insertScenarios } from "./mutations";
import type { Route } from "../../../.react-router/types/app/features/scenarios/+types/generate-scenarios-page";



const openai = new OpenAI();

const scenarioSchema = z.object({
    title: z.string(),
    description: z.string(),
    problem : z.string(),
    solution : z.string(),
    category : z.enum(["game","app","web","ai","other"]),
});

const ResponseSchema = z.object({
    scenario: z.array(scenarioSchema).length(10),
});

export const action = async({request}: Route.ActionArgs)=>{
    if(request.method !== "POST" ){
        return new Response(null ,{status : 404}); 
    }
    
    const header = request.headers.get("J-ESSICAANNE");
    if(!header || header !== "A-VONLEEJANE"){
        return new Response(null ,{status : 404});
    }
    

    const completion = await openai.chat.completions.parse({   
        model: "gpt-4o-mini",
        messages: [
                {
                    role: "user", content: "what is the best way to generate a scenario for a game about a cat that can fly."
                }
                ,{
                    role : "user",
                    content : "For example : 'An app that helps you find the best deals on groceries.',or 'A platform to rent a coder per hour.'"
                }
            ],
            response_format: zodResponseFormat(ResponseSchema, "scenario"),
    });
  

    const parsedScenarios = completion.choices[0].message.parsed?.scenario.map((scenario)=>({
        title : scenario.title,
        description : scenario.description,
        problem : scenario.problem,
        solution : scenario.solution,
        category : scenario.category,
    }));

    if(!parsedScenarios){
       return Response.json({
        error : "No scenarios generated"
       },{
        status : 400
       })
    }
   // await insertScenarios(adminClient, parsedScenarios.map((scenario)=>scenario.title));
    return Response.json({
        ok : true
    });
}

