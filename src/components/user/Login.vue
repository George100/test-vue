<template>
  <div class="inputLogin">
    <h2>Login</h2>
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
import { apiPOST_User } from "@/js/axiosAPI.js";

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
      const url = "login";
      const data = {
        username: this.username,
        password: this.password
      };

      apiPOST_User(url, data)
        .then(res => {
          this.resData = res.data;
          localStorage.token = res.data.token;
          this.$router.push("/");
        })
        .catch(err => {
          this.resData = "ERROR: " + err;
        });
    }
  }
};
</script>