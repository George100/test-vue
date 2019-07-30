<template>
  <div class="userReport">
    <table border="1" cellpadding="4">
      <tr>
        <th v-for="(item,index) in tableHeader">{{item}}</th>
      </tr>
      <tr v-for="(item2,index) in userData"  v-if="userData.length > 0">
        <td>{{item2.id}}</td>
        <td>{{item2.username}}</td>
        <td>{{item2.password}}</td>
        <td>{{item2.createdAt}}</td>
        <td>{{item2.updatedAt}}</td>
        <td>
          <input type="button" value="delete" @click="doDeleteUser(item2.id,index)" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { apiGET_User, apiDELETE_User } from "@/js/axiosAPI.js";

export default {
  data() {
    return {
      userData: [],
      tableHeader: [
        "id",
        "username",
        "password",
        "createdAt",
        "updatedAt",
        "delete"
      ]
    };
  },
  methods: {
    doDeleteUser(id, arrayIndex) {
      const url = "user/" + id;
      
      apiDELETE_User(url)
        .then(res => {
          this.userData.splice(arrayIndex, 1);
        })
        .catch(err => {
          this.userData = err;
        });
    }
  },
  created() {
    const url = "user";

    apiGET_User(url)
      .then(res => {
        this.userData = res.data;
      })
      .catch(err => {
        this.userData = err;
      });
  }
};
</script>

