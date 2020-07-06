<template>
  <div class="container">
    <div class="block"> 
    <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img :src="getImg(id)" />
          </div>
          <div class="card-content">
            <p>
              In malesuada et ipsum et gravida. Aenean efficitur, lacus eget
              lobortis vehicula, libero nunc dictum est, in mattis nibh sapien
              eu sem. Nam ut faucibus enim. Quisque in eros ante. Vestibulum
              dignissim, augue ac placerat fermentum, ex mauris congue sapien,
              ornare ultricies metus augue sit amet nulla. Aenean ut lectus
              consequat, porta purus a, aliquet eros. Donec varius congue lorem
              sit amet mollis. In eu lacus lacus. Morbi auctor elit nisl, id
              imperdiet sem tristique ac. Integer egestas orci vel sollicitudin
              pharetra.
            </p>
          </div>
          <div class="card-action">
            <a style="cursor:pointer;" @click="backList">Retour à la liste</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as config from "../../static/json/CE_data.json";

export default Vue.extend({
  name: "displayPics",
  data() {
    return {
      id: this.$route.params.id,
      myData: [],
    } as any;
  },
  mounted() {
    this.myData = config;
    console.log(this.myData);
  },
  methods: {
    getImg(id: string) {
      return require("../assets/" + id + ".png");
    },
    backList: function() {
      this.$router.push("/somePics");
    }
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
}
</style>
