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
    // store.dispatch({
    //   type: 'getCookie',
    //   cname: 'token'
    // });
    let token = this.getCookie('token');
    // console.log(token,this)
    return axios.get('api/get/article/list?token=' + token,params)
  },
  getUserInfo(params) {
    let token = this.getCookie('token');
    return axios.get('api/user/info?token=' + token,params)
  },
  changePortrait(params) {
    let token = this.getCookie('token');
    return axios.post('/api/portrait?token=' + token,params)
  },
  changeInfo(params) {
    let token = this.getCookie('token');
    console.log(token);
    return axios.post('/api/user/info?token=' + token,params)
  },
  getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    // console.log(ca)
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      // return c
      // console.log(c,c.substring(name.length, c.length))
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return '';
  }
}

export default api