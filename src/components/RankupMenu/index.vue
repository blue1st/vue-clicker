<template>
  <div class="menu">
    <p>{{desc}}</p>
    <button v-bind:disabled="count < requiredCount" @click="useCount(requiredCount)">{{unlockNum}} ({{count}}/{{requiredCount}})</button>
  </div>
</template>

<script>
export default {
  name: 'rankup-menu',
  props: {
    count: Number
  },
  data () {
    return {
      desc: '',
      unlockNum: 0,
      requiredCount: 0
    }
  },
  methods: {
    useCount (num) {
      this.$emit('sub', num)
      this.unlockNum += 1
    }
  }
}
</script>

<style scoped>
.menu {
  border: 1px dotted black;
  font-size: large;
}
</style>
