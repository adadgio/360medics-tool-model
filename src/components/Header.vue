<template>
  <div class="header">
    <img :src="logo" @click="goBack" style="cursor:pointer" />
    <div v-if="title != undefined">
      <h2>{{ title }}</h2>
    </div>
    <div v-else>
      <h2>{{ homeTitle }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      title: undefined,
      homeTitle: undefined,
      logo: require("@/assets/picture/logo.jpg"),
    };
  },
  mounted() {
    this.title = JsonImport.getValue(`entries.${this.$route.params.eid}.title`);
    this.homeTitle = JsonImport.getValue("header.title");
  },
  methods: {
    goBack: function() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.header {
  height: 85px;
  color: white;
  background: rgb(179, 35, 89);
  top: 0;
  width: 100%;
  align-items: center;
  z-index: 1;
  justify-content: space-between;
}
.header img {
  height: 70px;
  margin-left: 1rem;
  padding-top: 1rem;
  float: left;
}
.header h2 {
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
