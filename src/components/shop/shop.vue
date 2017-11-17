<template>
  <div class="shop">
    <shop-header></shop-header>
    <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from '../../components/shop-header/shop-header.vue'
  import Tab from '../../components/tab/tab.vue'

  export default{
    props: {
      id: {
        type: Number
      }
    },
    components: {
      ShopHeader,
      Tab
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"
  .shop
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 10
    background: $color-background
</style>
