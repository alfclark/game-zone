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
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about"
              ><router-link to="/">Home</router-link></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Games
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link to="/rock-paper-scissors"
                    >Rock Paper Scissors</router-link
                  ></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link to="/tetris">Tetris</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link to="/tic-tac-toe">Tic Tac Toe</router-link></a
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://www.alfclark.dev/"
              >Back to Portfolio</a
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
  background-color: var(--dark);
}

nav a {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.756);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--green);
  text-decoration: underline;
}
</style>
