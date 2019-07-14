<template>
  <div>
    <div v-if="pet !== undefined">
      <pet-form
        :pet-data="pet"
        :pet-type="type"
        :loading="loading"
        @form-submit="onFormSubmit"
      ></pet-form>
    </div>

    <not-found v-else type="Pet"></not-found>
  </div>
</template>

<script>
import PetForm from "@/components/PetForm.vue";
import NotFound from "@/components/NotFound.vue";

export default {
  name: "editpet",
  components: {
    PetForm,
    NotFound
  },
  props: {
    type: String,
    id: String
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    pet() {
      return this.$store.getters.getPetById({
        type: this.type,
        id: this.id
      });
    }
  },
  methods: {
    onFormSubmit(petData, petType, onSuccessCb) {
      this.loading = true;
      this.$store
        .dispatch("editItem", { petData, petType })
        .then(() => {
          this.$toast.success({ message: "Updated successfully" });
          onSuccessCb();
          this.loading = false;
        })
        .catch(() => {
          this.$toast.error({ message: "Failed to update entry" });
          this.loading = false;
        });
    }
  }
};
</script>
