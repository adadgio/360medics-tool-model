<template>
  <div class="container">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ myData.default.headerData.headerTitle }}</h4>
      </li>
      <!-- -->
      <router-link
        v-for="titre in myData.default.entries"
        :key="titre.title"
        tag="li"
        class="collection-item"
        :to="'/scoreObs/' + titre.id"
        ><a>{{ titre.title }}</a></router-link
      >
      <!-- <router-view></router-view>> -->
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as config from "../../static/json/Scores_data.json";
// console.log(config)
export default Vue.extend({
  name: "somePics",
  data() {
    return {
      myData: Array,
    };
  },
  mounted() {
    this.myData = config;
    console.log(this.myData);
  },
});
</script>
