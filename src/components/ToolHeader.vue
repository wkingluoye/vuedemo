<template>
  <div class="manual-wrapper">
    <h1>星辰小工具</h1>
    <div class="author">
      <h2>By：星辰千年 开天 HelloWorld</h2>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  color: #708069;
  animation: animate 0.8s linear infinite;
}

h2 {
text-align: right;
  margin-right: 12px;
  color: #eb8e55;
}

@keyframes animate {

  0% {
    text-shadow: 4px 0px 4px #ffd700;
  }
  12% {
    text-shadow: 4px 4px 4px #ffd700;
  }
  25% {
    text-shadow: 0px 4px 4px #ffd700;
  }
  37% {
    text-shadow: -4px 4px 4px #ffd700;
  }
  50% {
    text-shadow: -4px 0px 4px #ffd700;
  }
  62% {
    text-shadow: -4px -4px 4px #ffd700;
  }
  75% {
    text-shadow: 0px -4px 4px #ffd700;
  }
  87% {
    text-shadow: 4px -4px 4px #ffd700;
  }
  100% {
    text-shadow: 4px 0px 4px #ffd700;
  }
}

</style>
