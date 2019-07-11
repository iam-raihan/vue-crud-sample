<template>
  <div>
    <h1 class="text-danger">{{ type }} Not Found!</h1>
    <b-btn @click="goHome" variant="primary" class="mt-4">Go Home</b-btn>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
