export const request = {
    getRequest: (url = '', params = {}) => {
        let query = parseParams(params);
        return fetch(url + '?' + query, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + window.localStorage.getItem('token')
            }
        }).then(res => res.json()).then((data) => {
            return data;
        }).catch((error) => {
            return { success: false, message: error.message }
        })
    }
};

function parseParams(params = {}) {
    let queryString = '';
    if (Object.keys(params).length > 0)
        Object.entries(params).filter((element, index) => {
            queryString += element.toString().replace(',', '=') + '&'
        });
    else
        Object.entries(params).filter((element, index) => {
            queryString += element.toString().replace(',', '=')
        });
    return queryString;
}

export function hasToken() {
    return window.localStorage.getItem('token') === null ? false : true;
}