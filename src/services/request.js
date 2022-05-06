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
    // console.log(JSON.stringify(params))
    Object.entries(params).filter((element, index) => {
        queryString += element.toString().replace(',', '=')
    });
    return queryString;
}