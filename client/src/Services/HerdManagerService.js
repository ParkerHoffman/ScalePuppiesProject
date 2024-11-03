import {get, post} from "../utility/RequestMaker";

export async function getHerdList(FarmID) {
    return (await get (`Herd/GetHerds?FarmID=${FarmID}'`))?.data;
}

