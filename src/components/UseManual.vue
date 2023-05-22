<template>
  <div class="manual-wrapper">
    <h1>装备灵魂五行模拟器</h1>
    <div class="author">
      <h2>By：</h2>
      <h2>星辰千年 </h2>
      <h2>开天 </h2>
      <h2>HelloWorld</h2>
    </div>
    <h3>注意事项</h3>
    <ul>
      <li>五行激活顺序：<span class="red">火</span>→<span class="red">雷</span>→<span class="red">风</span>→<span
          class="red">电</span>→<span class="red">雨</span>→<span class="red">火</span>（循环）
      </li>
      <li>装备激活顺序：<span class="red">武器</span>→<span class="red">左戒指</span>→<span class="red">项链</span>→<span class="red">玉佩</span>→<span
          class="red">右戒指</span>→
        <span class="red">令牌</span>→<span class="red">衣服</span>→<span class="red">护腕</span>→<span class="red">鞋子</span>→<span
            class="red">头</span>
        →<span class="red">腰带</span>→<span class="red">牌王</span>→<span class="red">武器</span>（循环，<span class="warning">会存在一个装备的灵魂无法激活的情况</span>）
      </li>
    </ul>
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
}

@keyframes typingWords {
  0% {
    width: 0;
  }
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
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

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

.manual-wrapper {
  width: 100%;
  margin: 10px;
  text-align: left;
}

:global(.red) {
  color: #ff0000;
}

.warning {
  background: #000000;
  color: #7fff00;
}
:global(.success){
  color:#67c23a;
  font-weight: 700;
  text-align: right;
}

/* 主要是text-shadow和transform搭配动画的巧妙运用 */
.author {
  width: 600px;
  height: 28px;
  box-sizing: border-box;
  padding: 12px;
  color: transparent;
  display: flex;
  margin-left: auto;
}

h2 {
  text-shadow: 0 0 0 #eb8e55;
  /*animation: smoky 6s infinite;*/
}

@keyframes smoky {
  60% {
    text-shadow: 0 0 40px #00c957;
  }

  100% {
    text-shadow: 0 0 20px #00c957;
    /* 这里是重点 */
    transform: translate3d(15rem, -8rem, 0) rotate(-40deg) skew(70deg) scale(1.5);
    opacity: 0;
  }
}

h2:nth-child(1) {
  animation-delay: 2s;
}

h2:nth-child(2) {
  animation-delay: 2.4s;
}

h2:nth-child(3) {
  animation-delay: 2.8s;
}

h2:nth-child(4) {
  animation-delay: 3.2s;
}

h2:nth-child(5) {
  animation-delay: 3.6s;
}
</style>
