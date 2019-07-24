<template>
  <div id="explorePage">
    <h2>register</h2>
    <div>
      <span>id:</span>
      <input type="text" name="username" id="username" v-model="username" />
    </div>
    <div>
      <span>password:</span>
      <input type="text" name="password" id="password" v-model="password" />
    </div>
    <div>
      <input type="button" value="Register" @click="doRegister" />
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
    doRegister() {
      axios({
        method: "post",
        url: "http://api.primeplusglobal.com:1337/register",
        // url: "http://localhost:1337/register",
        responseType: "json",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          console.log(res);
          this.$router.push("Login");
        })
        .catch(err => {
          this.resData = "ERROR: " + err.data;
        });
    }
  }
};
</script>