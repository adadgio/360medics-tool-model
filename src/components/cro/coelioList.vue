<template>
    <div class="container">
         <ul class="collection with-header">
         <router-link
        v-for="liens in myData.default.entries[0].entries"
        :key="liens.link"
        tag="li"
        class="collection-item"
        :to="'/croList/'+ liens.link"
        ><a>{{ liens.title  }}</a></router-link>
      </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import * as config from "../../../static/json/CRO_data.json"

export default Vue.extend({
     name: "coelioList",
  data() {
    return {
      myData: Array,
    };
  },
  mounted() {
    this.myData = config;
    console.log(this.myData);
  },
  methods: {
    // getTitle() {
     
    // }
  }
})
</script>