<template>
  <div>
    <div v-if="pet !== undefined">
      <h1>{{ pet.name }}</h1>
    </div>

    <not-found v-else type="Pet"></not-found>
  </div>
</template>

<script>
import NotFound from "@/components/NotFound.vue";

export default {
  props: ["type", "id"],
  components: {
    NotFound
  },
  computed: {
    pet() {
      return this.$store.getters.getPetById({
        type: this.type,
        id: this.id
      });
    }
  }
};
</script>
