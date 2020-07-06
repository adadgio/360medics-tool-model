<template>
  <div class="container">
    <p>
      L'indice de masse corporelle (IMC) est le seul indice validé par
      l'Organisation mondiale de la santé pour évaluer la corpulence d'un
      individu et donc les éventuels risques pour la santé. L'IMC permet de
      déterminer si l'on est en situation de maigreur, de surpoids ou d'obésité
      par exemple.
    </p>
    <div>
      <h3>Calculer son IMC</h3>
      <form flex flex-column @submit.prevent="getFormValue" >
        <label flex flex-row>
          <input
            type="number"
            name="height"
            placeholder="Indiquer la taille en cm"
            class="champ"
            required
          />
          <span flex>cm</span>
        </label>
        <label flex flex-row>
          <input
            type="number"
            name="weight"
            placeholder="Indiquer le poids en kg"
            class="champ"
            required
          />
          <span flex>kg</span>
        </label>
        <p v-if="errors">{{errors}}</p>
        <input @click="calculIMC"  v-on:submit.prevent  type="submit" value="Calculer" class="submit" flex />
        <input @click="imc = 0, interpretation=''" type="reset" value="Effacer" flex />
      </form>
    </div>
    <div flex flex-column>
      <span class="result">IMC :{{imc}} <br /></span>
      <div flex flex-column class="interpretation">
        <div flex flex-row class="line bold row">
          <div class="col-6">Indice de masse corporelle (IMC) : {{interpretation}} </div>
        </div>

        <div flex flex-row class="line row">
          <div class="col-6">moins de 18,5</div>
          <div class="col-6">Insuffisance pondérale (maigreur)</div>
        </div>
        <div flex flex-row class="line row">
          <div class="col-6">18,5 à 25</div>
          <div class="col-6">Corpulence normale</div>
        </div>
        <div flex flex-row class="line row">
          <div class="col-6">25 à 30</div>
          <div class="col-6">Surpoids</div>
        </div>
        <div flex flex-row class="line row">
          <div class="col-6">30 à 35</div>
          <div class="col-6">Obésité modérée</div>
        </div>
        <div flex flex-row class="line row">
          <div class="col-6">35 à 40</div>
          <div class="col-6">Obésité sévère</div>
        </div>
        <div flex flex-row class="row">
          <div class="col-6">plus de 40</div>
          <div class="col-6">Obésité morbide ou massive</div>
        </div>
      </div>
    </div>
    <p class="mention">
      L’évaluation d’un patient est avant tout clinique et/ou biologique. Le
      traitement d’un patient ne peut reposer sur le seul résultat de cette
      application
    </p>
    <p class="source">Sources: TOP Santé</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "scoreImc",
  data() {
    return {
      imc: 0,
      interpretation: "",
      height: 0,
      weight: 0,
      errors : ''
    };
  },
  methods: {
     getFormValue(submitEvent: any) {
    const height = submitEvent.target.elements.height.value;
    const weight = submitEvent.target.elements.weight.value;
    this.calculIMC(height, weight);
     },
    calculIMC(height: number, weight: number) {
      this.imc = Number((weight / Math.pow(height / 100, 2)).toFixed(1));
      console.log(this.imc)
      if (this.imc <= 18.5 && this.imc > 0) {
        this.interpretation = "Insuffisance pondérale (maigreur)";
      } else if (this.imc <= 25 && this.imc >= 18.5) {
        this.interpretation = "Corpulence normale";
      } else if (this.imc <= 30 && this.imc > 25) {
        this.interpretation = "Surpoids";
      } else if (this.imc <= 35 && this.imc > 30) {
        this.interpretation = "Obésité modérée";
      } else if (this.imc <= 40 && this.imc > 35) {
        this.interpretation = "Obésité sévère";
      } else if (this.imc > 40) {
        this.interpretation = "Obésité morbide ou massive";
      }
    },
    checkForm() {
      if (this.height && this.weight) {
        this.errors = '';
      }

      if (!this.height || !this.weight ) {
        this.errors = 'Veuillez remplir les champs ';
      }
      console.log(this.errors)
  },
  },

});
</script>
