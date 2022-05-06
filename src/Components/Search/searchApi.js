import { request } from "../../services/request";

export async function searchsong(data) {
    return request.getRequest('https://api.spotify.com/v1/search', data);
}