<template>
  <div class="home">
    <h1>Welcome to the Game Zone</h1>
    <div class="choose-msg">
      <i class="fa-solid fa-arrow-left"></i>
      <h2>Choose a game from the menu</h2>
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
.choose-msg {
  display: flex;
  animation: shift1 2s infinite, show1 5s forwards;
  align-items: center;
  justify-content: center;
}
.choose-msg i {
  margin: 1rem;
}
</style>
