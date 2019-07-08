<template>
  <div>
    Pet edit
    <h1>{{ pet.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["type", "id"],
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
