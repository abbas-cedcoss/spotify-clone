export const request = {
    getRequest: (url = '', params = {}) => {
        let query = parseParams(params);
        return fetch(url + '?' + query, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQCXAyviNbn-hJzBCKqHt2oUp-oLOk4uJ4_fG6JziINxjxvTIP3fU6NUI7n57wNIhUD8NoUFDJKLJjTanEWsZUvXwRPhh9IsbTJ95u4qVlbkT_r39UTkIBdVPTQEuXQJKceCdeMlqNKlKdHjvakfhMTDWzdU4CcOBco"
            }
        }).then(res => res.json()).then((data) => {
            return data;
        }).catch((error) => {
            return { success: false, message: error.message }
        })
    },
    postRequest: (url = '', params = {}) => {
        let query = parseParams(params);
        return fetch(url + '?' + query, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQCXAyviNbn-hJzBCKqHt2oUp-oLOk4uJ4_fG6JziINxjxvTIP3fU6NUI7n57wNIhUD8NoUFDJKLJjTanEWsZUvXwRPhh9IsbTJ95u4qVlbkT_r39UTkIBdVPTQEuXQJKceCdeMlqNKlKdHjvakfhMTDWzdU4CcOBco"
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