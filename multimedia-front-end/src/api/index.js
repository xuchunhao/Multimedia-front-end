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
  addComment(params) {
    let token = this.getCookie('token');
    return axios.post('/api/comment?token=' + token,params)
  },
  getCommentList(params){
    let token = this.getCookie('token');
    return axios.post('/api/get/comment/list?token=' + token,params)
  },
  getArticleList(params) {
    let token = this.getCookie('token');
    return axios.get('api/get/article/list?token=' + token +'&mode=1',params)
  },
  getArticleListMore(params) {
    let token = this.getCookie('token');
    return axios.post('api/get/article/list?token=' + token,params)
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
    return axios.post('/api/user/info?token=' + token,params)
  },
  addArticle(params) {
    let token = this.getCookie('token');
    return axios.post('/api/article?token=' + token ,params)
  },
  changeNickname(params) {
    let token = this.getCookie('token');
    return axios.post('/api/user/nickname?token=' + token,params)
  },
  getNickname(params){
    let token = this.getCookie('token');
    return axios.post('/api/user/nickname?token=' + token,params)
  },
  getActive(params){
    let token = this.getCookie('token');
    return axios.post('/api/get/active/list?token=' + token,params)
  },
  getActiveList(params){
    let token = this.getCookie('token');
    return axios.get('/api/get/active/list?token=' + token +'&mode=1',params)
  },
  addActivity(params){
    let token = this.getCookie('token');
    return axios.post('/api/active?token=' + token,params)
  },
  getActivityPeople(params){
    let token = this.getCookie('token');
    return axios.post('/api/get/active/member?token=' + token,params)
  },
  joinActivity(params){
    let token = this.getCookie('token');
    return axios.post('/api/active?token=' + token,params)
  },
  exitActivity(params){
    let token = this.getCookie('token');
    return axios.post('/api/active?token=' + token,params)
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