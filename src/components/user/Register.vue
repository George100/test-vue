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
    doRegister() {
      const url = "register";
      const data = {
        username: this.username,
        password: this.password
      };

      apiPOST_User(url, data)
        .then(res => {
          this.$router.push("Login");
        })
        .catch(err => {
          this.resData = "ERROR: " + err;
        });
    }
  }
};
</script>