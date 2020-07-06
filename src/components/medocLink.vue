<template> 
<div class="container">
<h3 v-if="redirect()"> don't mind me i'm redirecting....</h3>
</div>
</template>
<script lang="ts">
// un scandale ... à refaire d'URGENCE !!! work for now...
import Vue from "vue";
export default Vue.extend({
  name: "medocLink",
  methods: {
    redirect() {
      const url = "http://lecrat.fr/";
      this.$router.push({ path: "/" });
      window.open(url, "_target");
    },
  },
});
</script>
