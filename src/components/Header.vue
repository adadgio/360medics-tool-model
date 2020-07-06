<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import"

export default Vue.extend({
  name: "Header",
  data() {
    return {
      title: null
    } as any;
  },
  mounted() {
    // hop
    this.title = JsonImport.getValue('header.title')
  },
});
</script>

<style scoped>
.header {
    height: 70px;
    color: white;
    background: red;
}
</style>
