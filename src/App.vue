<template>
  <div id="app">
    <div id="main">
      <counter :count="count"></counter>
      <countup-button @add="addCount"></countup-button>
    </div>
    <div id="side">
      <menu-a :count="count" @sub="subCount" @add="addCount"></menu-a>
      <menu-b :count="count" @sub="subCount" @add="addCount"></menu-b>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter'
import CountupButton from './components/CountupButton'
import MenuA from './components/RankupMenu/A'
import MenuB from './components/RankupMenu/B'

export default {
  name: 'app',
  components: {
    Counter,
    CountupButton,
    MenuA,
    MenuB
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addCount (num) {
      this.count += num
    },
    subCount (num) {
      this.count -= num
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
