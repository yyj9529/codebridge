import {Resend} from "resend";

const client = new Resend(process.env.RESEND_API_KEY);

export const loader = async()=>{
    const {data,error} = await client.emails.send({
        from: "onboarding@mail.codebridge.codes",
        to: "matthew@resend.dev",
        subject: "hello world",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    if(error){
        return json({error}, {status: 500});
    }

    return Response.json({data});
}