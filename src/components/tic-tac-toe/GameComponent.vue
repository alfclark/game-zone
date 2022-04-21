<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">Tic Tac Toe</h1>
      <h2>Three in a row wins!</h2>
      <button :class="btnStatus" @click="startGame">Start Game</button>
    </div>
    <div class="game-area" :class="gameStart">
      <span class="move">It is: {{ turn }}'s turn</span>
      <div class="board"></div>
    </div>
  </div>
  <div class="restart" :class="gameStatus">
    <div class="message">
      <h1 class="status">Winner is: {{ winner }}</h1>
      <h2 class="winner"></h2>
      <button @click="restart">Restart Game</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnStatus: "",
      gameStart: "",
      turn: "O",
    };
  },
  methods: {
    restart() {},
    startGame() {
      this.gameStart = "show";
      this.btnStatus = "hide";
    },
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
.header button {
  margin: 1rem;
  border: none;
  padding: 0.5rem;
  color: white;
  background-color: var(--green);
  animation: heartbeat 4s infinite;
}
.header button:hover {
  background-color: var(--dark);
  transition: 0.3s;
}
.hide {
  display: none;
}
.move {
  color: white;
  font-size: 1rem;
  transition: 0.3s;
}
.game-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 1rem 0;
}
.game-area {
  display: none;
  align-items: center;
  justify-content: center;
}
.show {
  display: flex;
  flex-direction: column;
}
.restart {
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(32, 32, 32, 0.831);
  color: var(--green);
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.finished {
  display: flex;
}

.message {
  background-color: rgb(0, 0, 0);
  border: 0.2rem solid black;
  padding: 70px;
  align-items: center;
  justify-content: center;
}

.restart h2 {
  animation: heartbeat 2s ease 0s infinite normal forwards;
}

.restart button {
  background-color: var(--green);
  border: none;
  color: white;
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
