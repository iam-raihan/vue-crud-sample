<template>
  <div>
    <pet-table type="Cats" :items="items"></pet-table>
  </div>
</template>

<script>
import PetTable from "@/components/PetTable.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      ...mapState("CatsModule", ["items"])
    };
  },
  components: {
    "pet-table": PetTable
  }
};
</script>
