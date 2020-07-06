<template>
  <div class="container">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ myData.default.headerData.headerTitle }}</h4>
      </li>
      <router-link
        v-for="titre in myData.default.entries"
        :key="titre.title"
        tag="li"
        class="collection-item"
        :to="'/croList/'+ titre.link"
        ><a>{{ titre.title }}</a></router-link>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import * as config from "../../../static/json/CRO_data.json"

export default Vue.extend({
     name: "croList",
  data() {
    return {
      myData: Array,
    };
  },
  mounted() {
    this.myData = config;
    console.log(this.myData);
  }
})
</script>