import axios from 'axios'

export function request(config) {
  // 创建axios实例
    const instance = axios.create({
      // baseURL: 'http://123.207.32.32:8000',
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout: 5000
    })
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    //一般在这里拦截
    return config;
  },err => {
    // console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  },err => {
    // console.log(err);
  })

//  发送真正的网络请求
    return instance(config);
    //调用这个instance实例后本身返回的就是一个(源码)Promise，所以可以直接返回后跟.then和.catch
}
