import axios from 'axios'

var api = {
  test(params) {
    return axios.post('/api/captcha',params)
  }
}

export default api