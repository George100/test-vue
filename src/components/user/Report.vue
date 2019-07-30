<template>
  <div class="data">
      {{ reportData }}
  </div>
</template>
<script>
import { apiGET_Report } from "@/js/axiosAPI.js";
export default {
  data() {
    return {
      reportData: "444"
    };
  },
  created() {
    const url = "report";
    apiGET_Report(url)
      .then(res => {
        this.reportData = res.data;
      })
      .catch(err => {
          this.reportData= err;
      });
  }
};
</script>

