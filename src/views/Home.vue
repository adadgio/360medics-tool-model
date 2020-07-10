<template>
  <div class="home">
    <Header />
    <h3>Votre titre</h3>
    <div class="but-container">
      <div class="row">
        <div v-for="entry in entries" :key="entry.id" class="col-sm-6">
          <router-link
            style="cursor:pointer"
            class="content"
            tag="div"
            :to="'/list/' + entry.id"
            >{{ entry.title }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="container">
      <p style="margin-top: 10%">Avec le soutien institutionnel de :</p>
      <img :src="img1" />
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
      img1: require("@/assets/picture/help.png"),
    };
  },
  computed: {
    entries() {
      return JsonImport.getValue("entries");
    },
  },
});
</script>
<style scoped>
.but-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: white;
}
.content {
  width: 100%;
  height: 85%;
  line-height: 100px;
  background: rgb(201, 100, 128);
  margin: 5px 0px 5px 0px;
  color: white;
  border-radius: 0.5em;
  text-transform: uppercase;
}
html,
body {
  font-family: "Roboto", sans-serif;
}
h3 {
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
