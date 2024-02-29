

function CallAPI(url, requestOptions) {
    return fetch(url, requestOptions)
        .then(response => {
            return response.json().then(data => ({
                status: response.status,
                data: data
            }));
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error; 
        });
}


export default CallAPI;
