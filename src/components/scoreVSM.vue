<template>
  <div class="container">
    <p>
      Introduisez l'âge gestationnel (AG) en semaines d'aménorrhée (entre 18 et
      40 SA seulement) puis la vitesse systolique maximale mesurée au niveau de
      l'artère cérébrale moyenne fœtale = (MAC-PSV: Peak velocity of systolic
      blood flow in the fetal middle cerebral artery).
    </p>
    <form flex flex-column @submit.prevent="onSubmit">
      <h3>Age gestationnel</h3>
      <label flex flex-row>
        <input
          type="number"
          name="SA"
          placeholder="Nbr de semaines d'aménorrhée (entre 18 et 40)"
          class="champ"
          required
        />
        <span flex>S.A</span>
      </label>
      <h3>Mesure de la MCA-PSV</h3>
      <label flex flex-row>
        <input
          type="number"
          name="MCA"
          placeholder="Indiquer la MCA-PSV en cm/sec"
          class="champ"
          required
        />
        <span flex>cm/sec</span>
      </label>
      <p>Veuillez remplir les champs</p>
      <input type="submit" value="Calculer" class="submit" />
      <input type="reset" value="Effacer" class="reset" />
    </form>
    <div>
      <p class="result" v-if="interpretation.length">
        A {{nbSemainesAmenorrhee}} semaines d'aménorrhée, le foetus {{interpretation}} avec un MCA-PSV de {{MCA}} cm/sec
      </p>
      <div class="interpretation" v-if="interpretation.length">
        <h4>Interpretation :</h4>
        <ul>
          <li>
            Si MCA-PSV inférieur ou égale à {{ PSVA1 }} alors le foetus n'est
            pas anémié
          </li>
          <li>
            Si MCA-PSV entre {{ PSVA1 }} et {{ PSVA2 }} alors le foetus a une
            anémié légère
          </li>
          <li>
            Si MCA-PSV entre {{ PSVA2 }} et {{ PSVA3 }} alors le foetus a une
            anémié modéré
          </li>
          <li>
            Si MCA-PSV au dessus de {{ PSVA3 }} alors le foetus est fortement
            anémié
          </li>
        </ul>
      </div>
    </div>
    <p class="mention">
      L’évaluation d’un patient est avant tout clinique et/ou biologique. Le
      traitement d’un patient ne peut reposer sur le seul résultat de cette
      application
    </p>
    <p class="source">Sources: aly-abbara</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "scoreVSM",
  data() {
    return {
      nbSemainesAmenorrhee: 0,
      MCA: 0,
      PSVA1: 0,
      PSVA2: 0,
      PSVA3: 0,
      PSVA4: 0,
      interpretation: "",
    };
  },
  methods: {

      onSubmit(submitEvent: Event) {
    this.nbSemainesAmenorrhee = submitEvent.target.elements.SA.value;
    this.MCA = submitEvent.target.elements.MCA.value;
    this.calculPSV(this.nbSemainesAmenorrhee);

    if (this.MCA <= this.PSVA1) {
      this.interpretation = 'n\'est pas anémié';
    } else if (this.MCA > this.PSVA1 && this.MCA <= this.PSVA2) {
      this.interpretation = 'a une anémie légère';
    } else if (this.MCA > this.PSVA2 && this.MCA <= this.PSVA3) {
      this.interpretation = 'a une anémie modéré';
    } else if (this.MCA > this.PSVA3) {
      this.interpretation = 'est fortement anémié';
    }
  },
    calculPSV(nbSemaine: any) {
      this.PSVA1 =
        Math.round(
          Math.pow(2.718281828459, 2.31 + 0.0463878 * nbSemaine) * 100
        ) / 100;
      this.PSVA2 = Math.round(this.PSVA1 * 1.29 * 100) / 100;
      this.PSVA3 = Math.round(this.PSVA1 * 1.5 * 100) / 100;
      this.PSVA4 = Math.round(this.PSVA1 * 1.55 * 100) / 100;
    },
    reset() {
      this.PSVA1 = 0;
      this.PSVA2 = 0;
      this.PSVA3 = 0;
      this.PSVA4 = 0;
      this.interpretation = "";
      this.MCA = 0;
      this.nbSemainesAmenorrhee = 0;
    },
  },
});
</script>
