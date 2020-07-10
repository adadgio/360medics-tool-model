<template>
  <div>
    <div class="list-view">
      <Header />
      <div v-for="item in items" :key="item.id" class="list group">
        <router-link
          v-if="!item.link"
          style="cursor:pointer"
          tag="li"
          class="list-group-item"
          :pageLoad="item.page"
          :to="'/list/' + entry.id + '/item/' + item.id"
          >{{ item.title }}
        </router-link>

        <a v-else class="list-group-item" :href="item.link" target="_blank"
          >{{ item.title }}
        </a>
      </div>
    </div>
    <div class="button-container">
      <button
        @click="backHome"
        type="button"
        class="btn btn-secondary btn-info btn-lg"
      >
        Retour au menu
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import";
import Header from "@/components/Header.vue";
export default Vue.extend({
  name: "Home",
  components: { Header },
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
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
});
</script>
<style scoped>
.list-view {
  text-align: left;
}
.button-container {
  display: inline-block;
  align-content: center;
  padding-top: 1em;
  padding-bottom: 1em;
}
html,
body {
  font-family: "Roboto", sans-serif;
}
</style>
