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
      <form @submit.prevent="getFormValue">
        <div class="form-group">
          <label>
            <input
              type="number"
              name="height"
              placeholder="Indiquer la taille en cm"
              class="champ"
              required
            />
            <span flex>cm</span>
          </label>
        </div>
        <div class="form-group">
          <label>
            <input
              type="number"
              name="weight"
              placeholder="Indiquer le poids en kg"
              class="champ"
              required
            />
            <span>kg</span>
          </label>
        </div>
        <p v-if="errors">{{ errors }}</p>
        <input
          @click="calculIMC"
          v-on:submit.prevent
          type="submit"
          value="Calculer"
          class="submit"
          flex
        />
        <input
          @click="(imc = 0), (interpretation = '')"
          type="reset"
          value="Effacer"
          flex
        />
      </form>
    </div>
    <div>
      <span class="result">IMC :{{ imc }} <br /></span>
      <span class="result">
        Indice de masse corporelle (IMC) : {{ interpretation }} <br
      /></span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      imc: 0,
      interpretation: "",
      height: 0,
      weight: 0,
      errors: "",
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
      console.log(this.imc);
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
  },
});
</script>
