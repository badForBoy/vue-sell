<template>
  <div class="popup">
    <div>
      <span @click="back"><</span>
    </div>
    popup
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .popup
    background: $color-text-l = #999
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 10
</style>
