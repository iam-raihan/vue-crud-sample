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

    <pet-form
      class="mt-4"
      v-if="showPetForm"
      @form-submit="onFormSubmit"
      :loading="loading"
    ></pet-form>
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
      showPetForm: false,
      loading: false
    };
  },
  methods: {
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    onFormSubmit(petData, petType, onSuccessCb) {
      this.loading = true;
      this.$store
        .dispatch("addItem", { petData, petType })
        .then(() => {
          this.$toast.success({ message: "Added successfully" });
          onSuccessCb();
          this.loading = false;
        })
        .catch(() => {
          this.$toast.error({ message: "Failed to add new entry" });
          this.loading = false;
        });
    }
  }
};
</script>
