<template>
  <div class="block">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="getImg(id)" alt="Card image cap" />
      <div   class="card-body">
        <h5 class="card-title">{{items.title}}</h5>
        <p class="card-text">
          In malesuada et ipsum et gravida. Aenean efficitur, lacus eget
          lobortis vehicula, libero nunc dictum est, in mattis nibh sapien eu
          sem. Nam ut faucibus enim. Quisque in eros ante. Vestibulum dignissim,
          augue ac placerat fermentum, ex mauris congue sapien, ornare ultricies
          metus augue sit amet nulla. Aenean ut lectus consequat, porta purus a,
          aliquet eros. Donec varius congue lorem sit amet mollis. In eu lacus
          lacus. Morbi auctor elit nisl, id imperdiet sem tristique ac. Integer
          egestas orci vel sollicitudin pharetra.
        </p>
        <a @click="backList" class="btn btn-primary">Retour à la liste</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { JsonImport } from "@/service/json-import";

export default Vue.extend({
  name: "Imagerie",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  computed: {
    items() {
      return JsonImport.getValue(`entries.entry4.items`);
    },
  },
  methods: {
    getImg(id: string) {
      return require("../assets/" + id + ".png");
    },
    backList: function() {
      this.$router.push("/list/entry4");
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
