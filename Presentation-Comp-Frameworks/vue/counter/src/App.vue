<template>
  <div id='app'>
    <header>
      <h1>Counter</h1>
    </header>
    <Main
      v-bind:writeNum = 'writeNum'
      v-on:plus="plus1"
      v-on:minus="minus1"
    />
  <footer>
    <h3>VueJS</h3>
  </footer>
  </div>
</template>

<script>
import Main from '@/components/main.vue'
export default {
  name: 'App',
  data () {
    return {
      writeNum: 0 // Initial Value
    }
  },
  methods: {
    plus1 () {
      this.writeNum++
    },
    minus1 () {
      this.writeNum--
    }
  },
  components: {
    Main
  }
}
</script>

<style>
#app {
  padding: 0;
  margin: 15% 25%;
  font-size: 10px;
  display: flex;
  flex-direction: column;
}

header {
  background-color: rgb(115, 115, 161);
  font-size: 2rem;
  padding: 0 35%;
}

footer {
  background-color: rgb(79, 155, 123);
  font-size: 1.2rem;
  padding: 0 40%;
}
</style>
