<template>
  <div id="app">
    <div id="nav">
      <h5>
        <router-link to="/">Home</router-link>
        ||
        <router-link to="/cats">Cats ({{ catsCount }})</router-link>
        ||
        <router-link to="/dogs">Dogs ({{ dogsCount }})</router-link>
        ||
        <router-link to="/about">About</router-link>
      </h5>
    </div>
    <keep-alive exclude="editpet">
      <router-view class="container" />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store
      .dispatch("init")
      .then(() => {
        this.$toast.success({ message: "Initial data loaded" });
      })
      .catch(() => {
        this.$toast.error({ message: "Failed to load initial data" });
      });
  },
  computed: {
    ...mapGetters({
      catsCount: "CatsModule/getCount",
      dogsCount: "DogsModule/getCount"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
