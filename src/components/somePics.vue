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
        :to="'/somePics/' + titre.id"
        ><a>{{ titre.title }}</a></router-link
      >
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Data} from '../../types/index'
import * as config from "../../static/json/CE_data.json";
// console.log(config)
export default Vue.extend({
  name: "somePics",
  data() {
    return {
      myData: {} as Data,
    };
  },
  mounted() {
    this.myData = config;
    console.log(this.myData);
  },
});
</script>
