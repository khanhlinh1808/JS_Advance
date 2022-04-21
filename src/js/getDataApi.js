export default getDataApi

import axios from "axios";
const LOADING_QUERY = '#loading';

let loadTime = document.querySelector(LOADING_QUERY);

function getDataApi(url, params, ms) {
    const conf = {
        params: params,
        url: url,
    }
    return new Promise((resolve) => {
        axios(conf).then((response) => {
            setTimeout(() => {
                resolve(response.data)
                loadTime.remove()
            }, ms)
        })
    })
}