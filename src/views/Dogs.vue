<template>
  <div>
    <pet-table type="Dogs" :items="items"></pet-table>
  </div>
</template>

<script>
import PetTable from "@/components/PetTable.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      ...mapState("DogsModule", ["items"])
    };
  },
  components: {
    "pet-table": PetTable
  }
};
</script>
