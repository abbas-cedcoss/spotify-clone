import { request } from "../../services/request";

export default async function fetchaccesstoken() {
    return request.postRequest("https://accounts.spotify.com/api/token");
}