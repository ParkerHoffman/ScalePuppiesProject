import axios from 'axios'

//The API url
var url = 'https://scalepuppiesapi20241101213402.azurewebsites.net/Herd';

export async function post(endpoint, data){

    var response = await axios.post(`${url}/${endpoint}`, data).catch(() => {return null;});

    if(!response){
        return null;
    }

    if(response.status === 403){
        return 403;
    }

    return response;
}



export async function get(endpoint){
    var response = await axios.post(`${url}/${endpoint}`).catch(() => {return null;});

    if(!response){
        return null;
    }

    if(response.status === 403){
        return 403;
    }

    return response;
}