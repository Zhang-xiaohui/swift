
import axios from 'axios'

//封装好的get和post接口，调用方法情况action文件
export let instance = axios.create({
    // baseURL: API_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {'X-Custom-Header': 'foobar'}
});


export let instancepost = axios.create({
    // baseURL: API_URL, //设置默认api路径
    timeout: 10000, //设置超时时间
    headers: {'content-type': 'application/json'},
});

export let instancepost_img = axios.create({
    headers: {'content-type': false},
    timeout: 10000, //设置超时时间
});


export const getData = (url, param ={}) => {
    return (
        instance.get(`${url}`, {
            params: param
        })
    )
}

export const postData = (url, param={}) => {
    return (
        instancepost.post(`${url}`, param)
    )
}

export const postData_img = (url, param={}) => {
    return (
        instancepost_img.post(`${url}`, param)
    )
}



// function filter(oJson){
//     for (var i in oJson) {
//         if(Object.prototype.toString.call(oJson[i])=='[object Array]'){
//             oJson[i]=JSON.stringify(oJson[i]);
//         }
//     }
//     return oJson;
// }