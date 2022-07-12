<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">Tic Tac Toe</h1>
      <h2>Three in line wins!</h2>
      <span class="move" :class="showResult">{{ result }}</span>
    </div>
    <main class="board">
      <h3 class="move">Player {{ player }}'s turn</h3>

      <div class="column">
        <div v-for="(row, x) in board" :key="x" class="flex">
          <div
            class="tile"
            v-for="(cell, y) in row"
            :key="y"
            @click="MakeMove(x, y)"
          >
            {{ cell === "X" ? "X" : cell === "O" ? "O" : "" }}
          </div>
        </div>
      </div>

      <div class="text-center">
        <button @click="ResetGame" class="reset">Reset</button>
      </div>
    </main>
  </div>
  <div class="restart" v-if="winner" :class="gameStatus">
    <div class="message">
      <h1 class="status">Winner is: {{ winner }}</h1>
      <h2 class="winner"></h2>
      <button @click="ResetGame">Restart Game</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const player = ref("X");
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
const CalculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};
const winner = computed(() => CalculateWinner(board.value.flat()));
const MakeMove = (x, y) => {
  if (winner.value) return;
  if (board.value[x][y]) return;
  board.value[x][y] = player.value;
  player.value = player.value === "X" ? "O" : "X";
};
const ResetGame = () => {
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  player.value = "X";
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

.reset {
  margin: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  color: var(--dark);
  background-color: var(--green);
  transition: 0.4s;
}

.reset:hover {
  background-color: var(--dark);
  color: var(--white);
}

.move {
  color: var(--dark);
  font-size: 1rem;
  transition: 0.3s;
}
.game-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 1rem 0;
}

.column {
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  display: flex;
}
.tile {
  border: 1px solid var(--dark);
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
  color: var(--green);
}
.tile:hover {
  background-color: grey;
  transition: 0.4s;
}

.restart {
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--blue);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.message {
  background-color: var(--dark);
  padding: 70px;
  align-items: center;
  justify-content: center;
}

.restart button {
  background-color: var(--blue);
  border: none;
  color: var(--dark);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.restart button:hover {
  background-color: grey;
  transition: 0.5s;
  transform: scale(1.1);
  color: black;
}
</style>
