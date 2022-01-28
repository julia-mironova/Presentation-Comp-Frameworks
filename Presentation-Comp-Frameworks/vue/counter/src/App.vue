<template>
  <div id="app">
    <header>
    <h1>Counter</h1>
  </header>
  <main>
    <h2 id = "unswer">0</h2>
    <div class="counter">
      <button class="plus">+</button>
      <button class="minus">-</button>
    </div>
  </main>
  <footer>
    <h3>VueJS</h3>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
