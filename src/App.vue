<template>
  <UnderConstruction />
  <NavBar />
  <FooterComponent />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
import UnderConstruction from "./components/UnderConstruction.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent,
    UnderConstruction,
  },
};
</script>

<style>
:root {
  --green: #18a999;
  --darkGreen: #109648;
  --red: rgb(171, 50, 50);
  --dark: #484349;
  --white: #f7f0f0;
  --blue: #8af3ff;
  --yellow: #fff5c9;
}
@keyframes shift1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes heartbeat {
  0% {
    animation-timing-function: ease-out;
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    animation-timing-function: ease-in;
    transform: scale(0.91);
  }

  17% {
    animation-timing-function: ease-out;
    transform: scale(0.98);
  }

  33% {
    animation-timing-function: ease-in;
    transform: scale(0.87);
  }

  45% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--white);
  height: 100vh;
}
</style>
