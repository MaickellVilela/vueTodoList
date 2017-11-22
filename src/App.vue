<template>
  <div id="app">
    <input type="text">
    <button type="button">Add</button>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: [
          'leite',
          'banana',
          'chocolate',
          'maça',
          'pipoca',
          'bolo'
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
    border: 1px solid #bdbdbd;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
