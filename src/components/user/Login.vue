<template>
  <div class="inputLogin">
    <div>
      <span>id:</span>
      <input type="text" name="username" id="username" v-model="username" />
    </div>
    <div>
      <span>password:</span>
      <input type="text" name="password" id="password" v-model="password" />
    </div>
    <div>
      <input type="button" value="login" @click="doLogin" />
    </div>
    <div>{{ resData }}</div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      username: "",
      password: "",
      resData: ""
    };
  },
  methods: {
    doLogin() {
      axios({
        method: "post",
        url: "http://169.63.222.107:1337/login",
        responseType: "json",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          this.resData = res.data;
        })
        .catch(err => {
          this.resData = "ERROR: " + err.data;
        });
    },
  }
};
</script>