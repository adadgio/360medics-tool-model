<template>
  <div class="block">
    <div class="card" style="width: 18rem;">
      <div   class="card-body">
        <h5 class="card-title">Trruc</h5>
        <p class="card-text">
          <img :src="'@/assets/1erT.png'"/>
          <iframe :src="'@/assets/mes-pages/'+item.page"></iframe>
        </p>
        <a @click="back" class="btn btn-primary">Retour à la liste</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import";

export default Vue.extend({
  name: "ItemPage",
  components: {},
  data() {
    return {
      
    };
  },
  computed: {
    item() {
      return JsonImport.getValue(`entries.${this.$route.params.eid}.items.${this.$route.params.iid}`);
    },
  },
  methods: {
    back() {
      this.$router.push(`/list/.${this.$route.params.eid}`);
    },
  },
});
</script>
<style scoped>
.card {
  width: 600px;
  align-items: center;
}
.block {
  display: inline-block;
    margin-top: 3%;
}
</style>
