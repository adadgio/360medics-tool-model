<template>
  <div>
    <Header />
    <div v-if="componentName != undefined" class="block">
      <component v-bind:is="componentFile"> </component>
      <a @click="back" class="btn btn-primary">Retour à la liste</a>
    </div>
    <div v-else class="block">
      <h2>TO BUILD</h2>
      <a @click="back" class="btn btn-primary">Retour à la liste</a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import";
import Header from "@/components/Header.vue";
export default Vue.extend({
  name: "ItemPage",

  components: { Header },
  data() {
    return {
      componentName: undefined,
    };
  },
  computed: {
    componentFile() {
      return () => import(`@/assets/mes-pages/${this.componentName}`);
    },
  },
  methods: {
    back() {
      this.$router.push(`/list/${this.$route.params.eid}`);
    },
  },
  created() {
    this.componentName = JsonImport.getValue(
      `entries.${this.$route.params.eid}.items.${this.$route.params.iid}.page`
    );
  },
});
</script>
<style scoped>
.block {
  display: inline-block;
  margin-top: 3%;
}
</style>
