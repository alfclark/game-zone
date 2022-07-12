<template>
  <nav class="navbar navbar-light sticky-top navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img class="logo" src="@/assets/logo.png" alt="logo"
      /></a>
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
              class="dropdown-menu dropdown-menu"
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
                  ><router-link to="/tic-tac-toe">Tic Tac Toe</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><router-link to="/hangman">Hangman (PC ONLY)</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item disabled" href="#"
                  ><router-link to="/ping-pong">Ping-Pong</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item disabled" href="#"
                  ><router-link to="/tetris">Tetris</router-link></a
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
  background-color: var(--white);
  border-bottom: solid var(--dark) 1px;
}
.navbar-toggler-icon {
}
.logo {
  width: 50px;
}

nav a {
  font-weight: bold;
  color: var(--dark);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--dark);
  text-decoration: underline;
}
.disabled {
  text-decoration: line-through;
}
</style>
