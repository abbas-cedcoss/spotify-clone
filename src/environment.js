export const isLive = false;
export const CLIENT_ID = "48080de1a3764989947c53da8f20dea4"
export const REDIRECT_URI = isLive ? "https://spotify-clone-chi-nine.vercel.app/panel/login" : "http://localhost:3000/panel/login"
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
export const RESPONSE_TYPE = "token"