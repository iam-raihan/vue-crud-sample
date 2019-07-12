<template>
  <div>
    <b-row>
      <b-col md="8" offset-md="2">
        <pet-table :type="petType" :items="items"></pet-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PetTable from "@/components/PetTable.vue";

export default {
  name: "viewpet",
  props: {
    petType: {
      type: String,
      required: true
    }
  },
  components: {
    PetTable
  },
  computed: {
    items() {
      return this.$store.state[this.petType + "Module"].items;
    }
  }
};
</script>
