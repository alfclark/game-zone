<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">Tetris</h1>
      <h2>Can you beat the falling figures?</h2>
      <span class="move" :class="showResult">{{ result }}</span>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.header {
  color: var(--green);
}

h2 {
  color: white;
  font-size: 1.5rem;
}

.move {
  color: white;
  font-size: 1.5rem;
  opacity: 0;
  transition: 0.3s;
}
.game-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 1rem 0;
}
</style>
