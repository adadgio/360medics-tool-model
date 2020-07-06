<template>
  <div class="home">
    <div>
        <div v-for="entry in entries" :key="entry.id">
            <router-link :to="'/list/'+entry.id">{{entry.title}}</router-link>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import"

export default Vue.extend({
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  computed: {
      entries() { return JsonImport.getValue('entries') }
  },
})
</script>
