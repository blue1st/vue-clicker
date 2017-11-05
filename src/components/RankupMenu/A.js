import base from './index'
export default {
  name: 'menu-a',
  mixins: [base],
  data () {
    return {
      requiredCount: 10,
      desc: '10秒ごとに自動で+1'
    }
  },
  created () {
    setInterval(() => {
      this.$emit('add', 1 * this.unlockNum)
    }, 10 * 1000)
  }
}
