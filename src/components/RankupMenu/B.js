import base from './index'
export default {
  name: 'menu-b',
  mixins: [base],
  data () {
    return {
      requiredCount: 100,
      desc: '毎秒に自動で+1'
    }
  },
  created () {
    setInterval(() => {
      this.$emit('add', 1 * this.unlockNum)
    }, 1 * 1000)
  }
}
