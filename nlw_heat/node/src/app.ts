import "dotenv/config";
import express from "express";

const app=express();

app.get("/github", (request, response)=>{
    response.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.
        GitHubClientId}`
    );
}); 

app.get("/signin/callback", (request,response)=>{
    const {code}=request.query;
    
    return response.json(code);
})


app.listen(4000,()=> console.log('ta rodando'))