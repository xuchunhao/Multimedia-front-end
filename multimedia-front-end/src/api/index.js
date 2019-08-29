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
  }
}

export default api