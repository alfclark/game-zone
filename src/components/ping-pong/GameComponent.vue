<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">Ping Pong</h1>
      <h2>Can you beat the PC? First to 7 wins</h2>
      <div class="game">
        <div class="score">
          <div id="player-score">User: {{ playerScore }}</div>
          |
          <div id="computer-score">PC: {{ pcScore }}</div>
        </div>
        <div class="ball" ref="ball"></div>
        <div class="paddle left" ref="playerPaddle"></div>
        <div class="paddle right" ref="computerPaddle"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* import Ball from "./ball";
import Paddle from "./paddle"; */

export default {
  setup() {},
  data() {
    return {
      playerScore: 0,
      pcScore: 0,
    };
  },
};
</script>

<style scoped>
.header {
  color: var(--green);
}

h2 {
  color: white;
  font-size: 1.5rem;
}

.game-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 1rem 0;
}
.paddle {
  --position: 50;
  position: absolute;
  background-color: white;
  top: calc(var(--position) * 1vh);
  transform: translateY(-50%);
  width: 1vh;
  height: 10vh;
}

.paddle.left {
  left: 1vw;
}

.paddle.right {
  right: 1vw;
}

.ball {
  --x: 50;
  --y: 50;
  position: absolute;
  background-color: white;
  left: calc(var(--x) * 1vw);
  top: calc(var(--y) * 1vh);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  width: 2.5vh;
  height: 2.5vh;
}

.score {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  gap: 1rem;
}
</style>
