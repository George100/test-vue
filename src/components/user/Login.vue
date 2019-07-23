<template>
  <div class="inputLogin">
    <div>
      <span>id:</span>
      <input type="text" name="id" id="username" v-bind="username" />
    </div>
    <div>
      <span>password:</span>
      <input type="text" name="password" id="password" v-bind="password" />
    </div>
    <div>
      <input type="button" value="login" @click="doLogin" />
    </div>
    <div>
        {{ resData }}
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      username: '',
      password: '',
      resData: ''
    };
  },
  methods: {
    doLogin() {
      axios
        .post("http://169.63.222.107:1337/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
            this.resData = res;
        })
        .catch(err => {
            this.resData = err;
        });
    }
  }
};
</script>