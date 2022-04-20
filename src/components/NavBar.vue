<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">AC</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about"
              ><router-link to="/">Home</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills"
              ><router-link to="/about">About</router-link></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  padding: 30px;
  background-color: rgb(37, 36, 36);
}

nav a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.756);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
