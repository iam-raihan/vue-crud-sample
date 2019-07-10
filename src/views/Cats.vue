<template>
  <div>
    <b-row>
      <b-col md="8" offset-md="2">
        <pet-table type="Cats" :items="items"></pet-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PetTable from "@/components/PetTable.vue";
import { mapState } from "vuex";

export default {
  components: {
    PetTable
  },
  computed: {
    ...mapState("CatsModule", ["items"])
  }
};
</script>
