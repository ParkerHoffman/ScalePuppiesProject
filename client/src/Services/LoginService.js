import {get, post} from "../utility/RequestMaker"

const AuthAPI = "Auth"

export async function Login(farmname, username, password){
    return (await get(`${AuthAPI}/login?FarmUsername=${farmname}&Username=${username}&password=${password}`))?.data;
}