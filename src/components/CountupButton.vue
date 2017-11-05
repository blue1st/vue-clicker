<template>
  <button @click="countup(1)">+1</button>
</template>

<script>
export default {
  name: 'countup-button',
  methods: {
    countup (num) {
      this.$emit('add', num)
    }
  }
}
</script>

<style scoped>
button {
  font-size: x-large;
}
</style>
