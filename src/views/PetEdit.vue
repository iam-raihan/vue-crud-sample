<template>
  <div>
    <div v-if="pet !== undefined">
      <pet-form
        :pet-data="pet"
        :pet-type="type"
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
  props: {
    type: String,
    id: String
  },
  components: {
    PetForm,
    NotFound
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
    onFormSubmit({ data, type }) {
      this.$store.dispatch("editItem", { data, type });

      this.$toast.success({ message: "Updated successfully" });
    }
  }
};
</script>
