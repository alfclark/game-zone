<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">Hangman</h1>
      <h2>Can you find the word?</h2>
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

.game-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 1rem 0;
}
</style>
