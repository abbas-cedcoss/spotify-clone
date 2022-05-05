import { request } from "../../services/request";

export default async function getnewreleases(data = {}) {
    return request.getRequest('https://api.spotify.com/v1/browse/new-releases', data);
}