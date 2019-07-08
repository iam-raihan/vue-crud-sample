<template>
  <div>
    Pet view
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
  // watch: {
  //   $attrs: {
  //     immediate: true,
  //     handler: function() {
  //       this.pet = this.$store.getters.getPetById({
  //         type: this.type,
  //         id: this.id
  //       });
  //     }
  //   }
  // }
};
</script>
