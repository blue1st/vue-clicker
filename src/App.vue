<template>
  <div id="app">
    <div id="main">
      <counter :count="count"></counter>
      <countup-button @add="addCount"></countup-button>
    </div>
    <div id="side">
      <rankup-menu></rankup-menu>
      <rankup-menu></rankup-menu>
      <rankup-menu></rankup-menu>
      <rankup-menu></rankup-menu>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import CountupButton from './components/CountupButton'
import RankupMenu from './components/RankupMenu'
export default {
  name: 'app',
  components: {
    Counter,
    CountupButton,
    RankupMenu
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addCount () {
      this.count += 1
    }
  }
}
</script>

<style>
div#app {
  width: 100%;

  display: -webkit-inline-flex;
  display: inline-flex;

  -webkit-flex-direction: row;
  flex-direction: row;
}
div#main {
  width: 70%;

  border: 1px solid blue;

  display: -webkit-inline-flex;
  display: inline-flex;

  -webkit-flex-direction: column;
  flex-direction: column;
}
div#side {
  width: 30%;

  border: 1px solid red;

  display: -webkit-inline-flex;
  display: inline-flex;

  -webkit-flex-direction: column;
  flex-direction: column;
}
</style>
