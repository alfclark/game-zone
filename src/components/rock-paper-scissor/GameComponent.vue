<template>
  <div class="game-container">
    <div class="header">
      <h1 class="title">Rockin' papers with my scissors</h1>
      <h2>Choose yours! First to score 5 wins.</h2>
      <span class="move" :class="showResult">{{ result }}</span>
    </div>
    <div class="choices">
      <a @click="choose('rock')" class="choice-container" data-selection="rock">
        <i class="fa-regular fa-hand-back-fist"></i>
        <p>Rock</p>
      </a>
      <a
        @click="choose('paper')"
        class="choice-container"
        data-selection="paper"
      >
        <i class="fa-regular fa-hand"></i>
        <p>Paper</p>
      </a>
      <a
        @click="choose('scissor')"
        class="choice-container"
        data-selection="scissors"
      >
        <i class="fa-regular fa-hand-scissors"></i>
        <p>Scissors</p>
      </a>
    </div>
    <div>
      <p class="score-title">Score</p>
      <div class="scoreboard">
        <div class="scoreboard__name">PC</div>
        <div class="scoreboard__name">User</div>
        <p class="pc-score">{{ pcScore }}</p>
        <p class="user-score">{{ userScore }}</p>
      </div>
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
      options: ["rock", "paper", "scissor"],
      pcScore: 0,
      userScore: 0,
      pcChoice: "",
      userChoice: "",
      result: "hello",
      showResult: "",
      gameStatus: "",
      winner: "",
    };
  },
  methods: {
    restart() {
      this.pcScore = 0;
      this.userScore = 0;
      this.showResult = "";
      this.gameStatus = "";
    },
    choose(choice) {
      this.userChoice = choice;
      this.pcChoice = this.options[(Math.random() * this.options.length) | 0];
      this.compare();
      console.log(this.userChoice);
      console.log(this.pcChoice);
    },
    compare() {
      if (this.userChoice === this.pcChoice) {
        this.result = "No points!";
        this.showResult = "showResult";
        setTimeout(() => {
          this.showResult = "";
        }, 1000);
      } else {
        if (this.userChoice === "scissor") {
          if (this.pcChoice === "paper") {
            this.result = "Point for user!";
            this.showResult = "showResult";
            setTimeout(() => {
              this.showResult = "";
            }, 1000);
            this.userScore++;
          } else {
            this.result = "Point for PC!";
            this.showResult = "showResult";
            setTimeout(() => {
              this.showResult = "";
            }, 1000);
            this.pcScore++;
          }
        }
        if (this.userChoice === "paper") {
          if (this.pcChoice === "rock") {
            this.result = "Point for user!";
            this.showResult = "showResult";
            setTimeout(() => {
              this.showResult = "";
            }, 1000);
            this.userScore++;
          } else {
            this.result = "Point for PC!";
            this.showResult = "showResult";
            setTimeout(() => {
              this.showResult = "";
            }, 1000);
            this.pcScore++;
          }
        }
        if (this.userChoice === "rock") {
          if (this.pcChoice === "scissor") {
            this.result = "Point for user!";
            this.showResult = "showResult";
            setTimeout(() => {
              this.showResult = "";
            }, 1000);
            this.userScore++;
          } else {
            this.result = "Point for PC!";
            this.showResult = "showResult";
            setTimeout(() => {
              this.showResult = "";
            }, 1000);
            this.pcScore++;
          }
        }
        this.status();
      }
    },
    status() {
      if (this.pcScore === 5 || this.userScore === 5) {
        if (this.pcScore === 5) {
          this.winner = "PC";
          this.gameStatus = "finished";
        }
        if (this.userScore === 5) {
          this.winner = "User";
          this.gameStatus = "finished";
        }
      }
    },
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

.move {
  color: var(--darkGreen);
  font-size: 1.5rem;
  opacity: 0;
  transition: 0.3s;
}
.showResult {
  opacity: 1;
  margin: 0;
}

a {
  text-decoration: none;
}

.game-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem 0;
}

.choices {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.choice-container {
  padding: 2rem;
  margin: 1rem;
  width: 12rem;
  border-radius: 15px;
  border: 0.2rem solid var(--dark);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark);
  transition: 0.4s;
}

.choice-container:hover {
  transform: scale(1.1);
  color: var(--green);
  cursor: pointer;
  border: 0.2rem solid var(--green);
}

.fa-regular {
  margin: 1rem 0;
  font-size: 4rem;
}

.score-title {
  color: var(--dark);
  font-size: 1.5rem;
  text-decoration: underline;
  font-weight: 600;
}

.scoreboard {
  margin-top: -30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
}

.restart {
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--blue);
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
  background-color: var(--dark);
  padding: 70px;
  align-items: center;
  justify-content: center;
}

.restart h2 {
  animation: heartbeat 2s ease 0s infinite normal forwards;
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
@media screen and (max-width: 900px) {
  .game-container {
    margin: 2rem 0;
    gap: 1rem;
  }
  .choice-container {
    padding: 1rem;
    margin: 0.5rem;
    width: 7rem;
    background-color: var(--dark);
    border-radius: 15px;
    border: 0.2rem solid black;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  .fa-regular {
    font-size: 2rem;
  }
}
</style>
