import { request } from "../../services/request";

export default async function getnewreleases(data = {}) {
    return request.getRequest('https://api.spotify.com/v1/browse/new-releases', data);
}

export async function getfeaturedplaylists() {
    return request.getRequest('https://api.spotify.com/v1/browse/featured-playlists', {});
}

export async function browsegeneres() {
    return request.getRequest('https://api.spotify.com/v1/browse/categories', {});
}