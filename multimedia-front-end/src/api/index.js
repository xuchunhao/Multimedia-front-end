import axios from 'axios'
import store from '@/store.js'

var api = {
  test(params) {
    return axios.post('/api/captcha',params)
  },
  getPhoneCaptcha(params) {
    return axios.post('/api/captcha',params)
  },
  register(params) {
    return axios.post('/api/user/register',params)
  },
  login(params) {
    return axios.post('/api/user/login',params)
  },
  getArticleList(params) {
    let token = store.state.token;
    return axios.get('api/get/article/list?token=' + token,params)
  },
  getUserInfo(params) {
    let token = store.state.token;
    return axios.get('api/user/info?token=' + token,params)
  },
  changePortrait(params) {
    let token = store.state.token;
    return axios.post('/api/portrait?token=' + token,params)
  },
}

export default api