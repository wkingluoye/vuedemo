<template>
  <UseManual/>
  <ContentShow/>
</template>

<script>
import UseManual from './components/UseManual.vue'
import ContentShow from './components/ContentShow.vue'

export default {
  name: 'App',
  components: {
    UseManual,
    ContentShow
  }
}
</script>

<style>
body{
  background: url("./assets/bt_bj.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
