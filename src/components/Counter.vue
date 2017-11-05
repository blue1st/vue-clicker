<template>
  <p class="count">{{count}}</p>
</template>

<script>
export default {
  name: 'counter',
  props: {
    count: Number
  }
}
</script>

<style scoped>
.count {
  font-size: xx-large;
}
</style>
