<template>
  <div class="container">
    <div class="row">
      <router-link tag="div" class="col s12 m6 l3" :to="'/somePics'"
        ><a>Clichés obligatoires en échographies obstétricale </a></router-link
      >
      <router-link tag="div" class="col s12 m6 l3" :to="'/scoreObs'"
        ><a>Scores en obstétrique </a></router-link
      >
      <router-link tag="div" class="col s12 m6 l3" :to="'/medocLink'"
        ><a>Médicament utile pendant la grossesse </a></router-link
      >
      <router-link tag="div" class="col s12 m6 l3" :to="'/cro'"
        ><a>Compte Rendu Opératoire </a></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import * as title from "../../static/json/AAC_data.json";
export default Vue.extend({
  name: "HomePage",
  data() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
  /* background :rgb(115, 22, 57) none repeat scroll 0% 0% */
}
</style>
