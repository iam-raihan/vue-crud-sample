<template>
  <div id="app">
    <div id="nav">
      <h4>
        <router-link to="/">Home</router-link> |
        <router-link to="/cats">Cats</router-link> |
        <router-link to="/dogs">Dogs</router-link> |
        <router-link to="/about">About</router-link>
      </h4>
    </div>
    <keep-alive>
      <router-view class="container" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("init");
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
}
</style>
