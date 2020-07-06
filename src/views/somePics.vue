<template>
  <div class="somePics">
    <img alt="Vue logo" src="../assets/logo.png">
    <somePics/>
  </div>
</template>

<script>
// @ is an alias to /src
import somePics from '@/components/somePics.vue'

export default {
  name: 'somePics',
  components: {
    somePics
  }
}
</script>