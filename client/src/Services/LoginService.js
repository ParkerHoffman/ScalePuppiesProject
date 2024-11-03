import {get, post} from "../utility/RequestMaker"

const AuthAPI = "Auth"

export async function Login(farmname, username, password){
    console.log(farmname, username, password);
    return (await get(`${AuthAPI}/login?FarmUsername=${farmname}&Username=${username}&password=${password}`))?.data;
}

export async function RegisterFarm(farmN, farmUN, un, pass){
    return (await post(`${AuthAPI}/CreateFarm`,

        {
            "farmName": farmN,
            "farmUserName": farmUN,
            "username": un,
            "password": pass
        }
     ))?.data;
}


export async function GetUserList(FarmID){
    return (await get(`${AuthAPI}/${FarmID}/GetUserList`))?.data
}