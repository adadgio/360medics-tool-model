<template>
  <div class="list-view">
        <div v-for="titre in items" :key="titre.id" class="list group">
            <router-link v-if=" titre.link"
            style="cursor:pointer"
            tag="li"
            class="list-group-item"
            :to="'/img/' + titre.id"
            >{{ titre.title }}</router-link
          >
          <router-link v-else
          style="cursor:pointer"
            tag="li"
            class="list-group-item"
            :to="'/list/'+ titre.id"
            >{{ titre.title }}</router-link
          >
        </div>
    </div>

</template>

<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import";

export default Vue.extend({
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    items() {
      return JsonImport.getValue(`entries.${this.$route.params.id}.items`);
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
});
</script>
<style scoped>
.list-view {
text-align: left;
} 
html, body {
  font-family: 'Roboto', sans-serif;
}
</style>
