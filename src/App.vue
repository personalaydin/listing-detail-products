<template>
  <div id="app">
    <div class="container">
      <nav>
        <router-link to="/">List</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color: wheat;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
