<template>
  <div class="index">
    <router-link to="/navbar">
      导航栏
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import api from '@/api/index.js'

export default {
  name:'index',
  mounted () {
    axios.post('/api/captcha',{
      params: {
        "id":1, 
        "type":"img",
        "subtype":"generate",
        "status":0,
        "data":{}
      }
    }).then(res => {
      //console.log(res)
      }
    )
    api.test({
      params: {
        "id":1, 
        "type":"img",
        "subtype":"generate",
        "data":{}
      }
    }).then(res => {
      console.log(res)
      }
    )
  }
}
</script>