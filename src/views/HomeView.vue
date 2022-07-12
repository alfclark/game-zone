<template>
  <div class="home">
    <i class="fa-solid fa-gamepad"></i>
    <h1>Welcome to the Game Zone</h1>
    <div class="games">
      <h1>
        In this site you can play:
        <!-- Scroller Start -->

        <div class="scroller">
          <span>
            RockPaperScissors<br />
            Tetris<br />
            Tic Tac Toe<br />
            Battleship<br />
            Memory Game<br />
            Hangman
          </span>
        </div>

        <!-- Scroller End -->
      </h1>
    </div>
    <div class="choose-msg">
      <i class="fa-solid fa-dragon"></i>
      <h2>Choose a game from the Navbar menu</h2>
      <i class="fa-solid fa-dragon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--dark);
  margin: 10rem 0;
}
.home .fa-gamepad {
  font-size: 4rem;
}
.choose-msg {
  display: flex;
  animation: shift1 2s infinite, show1 5s forwards;
  align-items: center;
  justify-content: center;
}
.choose-msg h2 {
  font-size: 1rem;
  margin: 3rem 0;
}
.choose-msg i {
  font-size: 1rem;
  margin: 0 1rem;
}

.games {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem;
}
.games h1 {
  font-size: 1.2rem;
}
/* Scroller styling */
.scroller {
  margin: 0.5rem;
  height: 2.1rem;
  line-height: 2.2rem;
  position: relative;
  overflow: hidden;
}
.scroller > span {
  position: relative;
  top: 0;
  animation: slide 5s infinite;
  font-size: 2rem;
}
@keyframes slide {
  0% {
    top: 0;
  }
  25% {
    top: -1.2em;
  }
  50% {
    top: -2.4em;
  }
  75% {
    top: -3.6em;
  }
}
</style>
