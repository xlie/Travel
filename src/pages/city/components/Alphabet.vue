<template>
  <ul class="list">
    <li
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterChange"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
    >{{item}}</li>
  </ul>
</template>>
<script>
export default {
  name: 'Alphabet',
  props: {
    city: Object
  },
  data() {
    return {
      startY: '',
      touchY: ''
    }
  },
  computed: {
    letters() {
      const letters = []
      for (let key in this.city) {
        letters.push(key)
      }
      return letters
    }
  },
  methods: {
    handleLetterChange(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    handleTouchMove(e) {
      this.touchY = e.touches[0].clientY-80;
      const index = Math.floor((this.touchY - this.startY) / 20)
      if (index >= 0 && index <= this.letters.length) {
        this.$emit('change', this.letters[index])
      }
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 80px;
  width: 20px;
  right: 0;
  bottom: 0;
  li {
    line-height: 20px;
  }
}
</style>