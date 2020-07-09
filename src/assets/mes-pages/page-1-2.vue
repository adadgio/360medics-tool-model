<template>
  <div>
    <h1>Mon titre</h1>
    <div class="card" style="width: 40rem;">
      <img class="card-img-top" :src="getImg()" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          egestas augue, a tempus enim. Pellentesque porttitor risus vitae
          mauris blandit, vel tristique felis rutrum. Phasellus scelerisque est
          vitae fermentum commodo. Vestibulum ullamcorper sem justo, sit amet
          ultricies elit dapibus nec. Vestibulum accumsan bibendum ex. In
          feugiat tempor diam, non aliquet arcu fermentum nec. Pellentesque
          laoreet magna ex, non malesuada nunc sodales ac.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // veuillez spécifier le chemin de l'image dans la fonction ci-dessous :
  methods: {
    getImg() {
      return require("../picture/1erT.png");
    },
  },
};
</script>
