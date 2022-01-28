<template>
  <main>
    <h2 id = 'unswer'>{{writeNum}}</h2>
    <div class='counter'>
      <button class="plus">+</button>
      <button class="minus">-</button>
    </div>
  </main>
</template>

<script>
export default {
  props: ['writeNum']
}
</script>

<style>
main {
  background-color: rgb(101, 172, 182);
  font-size: 3rem;
  padding: 0 30%;
}

h2 {
  margin: 1rem;
  padding-left: 40%;
}

.plus,
.minus {
  width: 50px;
  height: 50px;
  border-radius: 25%;
  cursor: pointer;
  font-size: 2rem;
}

.plus:hover,
.minus:hover {
  background-color: blueviolet;
}

.counter {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
</style>
