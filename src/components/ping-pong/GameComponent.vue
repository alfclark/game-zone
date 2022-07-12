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
      </div>
    </div>
    <ComingSoon />
  </div>
</template>

<script>
import ComingSoon from "@/components/ComingSoon.vue";
export default {
  components: {
    ComingSoon,
  },
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
  color: var(--dark);
}
.title {
  font-weight: 600;
}

h2 {
  color: var(--dark);
  font-size: 1.5rem;
}
.game {
  display: none;
}

.score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.game-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 1rem 0;
}
</style>
