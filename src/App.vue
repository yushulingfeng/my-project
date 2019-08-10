<template>
  <div id="app">
    <Home />
    <!-- <Tabbar /> -->
  </div>
</template>

<script>
import Home from "@/views/Home/Home";
// import Tabbar from './components/Tabbar/Tbabar';

export default {
  name: "app",
  components: {
    Home,
    // Tabbar
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
#app {
    max-width: 750px;
    margin: auto;
}


</style>
