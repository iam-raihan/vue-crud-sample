<template>
  <div>
    <h1>Page Not Found!</h1>
    <b-btn @click="goHome" variant="primary" class="mt-4">Go Home</b-btn>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
