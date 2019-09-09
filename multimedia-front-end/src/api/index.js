import axios from 'axios'

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
    return axios.get('api/get/article/list?token=99c9150238fa21051f558ceccad55b8a',params)
  }
}

export default api