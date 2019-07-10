<template>
  <div class="home">
    <h1>Adopt a new best friend!</h1>

    <b-row>
      <b-col>
        <b-btn @click="togglePetForm" variant="primary">
          Add New Pet
        </b-btn>
      </b-col>
    </b-row>

    <pet-form class="mt-4" v-if="showPetForm" @form-submit="onFormSubmit" />
  </div>
</template>

<script>
import PetForm from "@/components/PetForm";

export default {
  name: "home",
  components: {
    PetForm
  },
  data() {
    return {
      showPetForm: false
    };
  },
  methods: {
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    onFormSubmit(data, type) {
      this.$store.dispatch("addItem", { data, type });

      this.$toast.success({ message: "Added successfully" });
    }
  }
};
</script>
