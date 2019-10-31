import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = 'http://localhost:3000/'; //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function allAxios (promiseArray) {
    // 这个其实可以直接axios.all(promiseArray)，为何需要再增加一层Promise？
    // 这里是有原因的：
    // 1、如果直接axios.all(promiseArray)，请求成功或失败的处理是交由使用者
    // 2、这里封装多一层Promise，是便于此处封装时考虑添加公共处理如开启遮罩层关闭遮罩层，之后才抛出调用结果给调用方，而不应该由调用方赖关闭遮罩层
  return new Promise((resolve, reject) => {
    axios.all(promiseArray)
      .then(axios.spread(function (acct, perms) {
            // 两个请求现在都执行完成
            let list=[];
            list.push(acct,perms);
             resolve(list)
          }))
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  post,
  get,
  allAxios
}