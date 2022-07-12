<template>
  <footer class="footer">
    <p>Alfredo Clark © 2022</p>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--white);
  color: var(--dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-top: solid var(--dark) 1px;
}
footer p {
  margin: 0;
}
</style>
