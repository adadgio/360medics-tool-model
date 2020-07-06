<template>
  <div class="list-view">
    
    <div> {{items}}
        <!--<div v-for="entry in entries" :key="entry.id">
            <router-link :to="'/'">{{entry.title}}</router-link>
        </div>-->
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
      items() { return JsonImport.getValue(`entries.${this.$route.params.id}.items`) }
  },
  mounted()
  {
      console.log(this.$route.params.id)
  }
})
</script>
