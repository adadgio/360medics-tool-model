<template>
  <div class="list-view">
    <div v-for="item in items" :key="item.id" class="list group">
      <router-link
        v-if="!item.link"
        style="cursor:pointer"
        tag="li"
        class="list-group-item"
        :pageLoad="item.page"
        :to="'/list/' + entry.id + '/item/' + item.id"
        >{{ item.title }}
        <!-- <small
          >{{ entry.id }}->{{ item.id }} + {{ item.page }}</small
        > -->
        </router-link
      >

      <a v-else class="list-group-item" :href="item.link" target="_blank"
        >{{ item.title }} 
        <!-- <small>{{ entry.id }}->{{ item.id }}</small> -->
        </a
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
    return {
      pageLoad: "",
    } as unknown;
  },
  computed: {
    entry() {
      return JsonImport.getValue(`entries.${this.$route.params.eid}`);
    },
    items() {
      return JsonImport.getValue(`entries.${this.$route.params.eid}.items`);
    },
  },
  mounted() {
    console.log(this.$route.params.eid);
    console.log(JsonImport.getValue(`entries.${this.$route.params.eid}.items`));
  },
});
</script>
<style scoped>
.list-view {
  text-align: left;
}
html,
body {
  font-family: "Roboto", sans-serif;
}
</style>
