<template>
  <InputQuestion/>
</template>

<script>
import InputQuestion from './components/ContentQuestion.vue'

export default {
  name: 'App',
  components: {
    InputQuestion,
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
