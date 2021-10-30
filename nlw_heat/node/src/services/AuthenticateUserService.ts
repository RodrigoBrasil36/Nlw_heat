import axios from "axios";

class AuthenticateUserService{
    async execute(code:string){
        const url="https://github.com/login/oauth/access_token";

        const response=await axios.post(url,null,{
            params:{
                client_id: process.env.GitHubClientId,
                client_secret:process.env.GitHubClientSecret,
                code,
            },
            headers:{
                "Acecept":"application/json"
            }
        })
        
        return response.data;
    }
}


export {AuthenticateUserService};