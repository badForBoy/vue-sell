<template>
  <div class="shop-header" :style="bgImg">
    <div class="header-icon">
      {{shopInfo.name}}
    </div>
    <div class="header-parkage">
      <div class="pic">
        <img :src="shopimgurl">
      </div>
      <div class="text">
        <h2>{{shopInfo.name}}</h2>
        <p>{{shopInfo.order_lead_time}}分钟到达 <span>/</span> 配送费￥{{shopInfo.float_delivery_fee}}</p>
        <p>公告：欢迎光临，用餐高峰期请提前下单，谢谢</p>
      </div>
    </div>
    <div class="actions">
      <span>新用户下单立减17元</span>
      <span class="right" @click="popup(shopInfo)">5个活动</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      shopInfo: {
        type: Object,
        default: function () {
          return {}
        }
      },
      bgimgurl: {},
      shopimgurl: {}
    },
    data() {
      return {}
    },
    computed: {
      bgImg() {
        return `background-image:url(${this.bgimgurl})`
      }
    },
    methods: {
      popup(shopInfo) {
        this.$router.push({
          path: `/shop/${shopInfo.id}`
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .shop-header
    position: relative
    width: 100%
    height: 160px
    transform-origin: top
    background-size: cover
    .header-icon
      height: 36px
      line-height: 36px
    .header-parkage
      box-sizing: border-box
      display: flex
      padding: 0 15px
      .pic
        width: 80px
        height: 80px
        border: 1px solid $color-theme-f
        overflow: hidden
        border-radius: 4px
        img
          width: 100%
          height: 100%
      .text
        flex: 0, 0, 120px
        padding-left: 10px
        color: $color-text-f
        text-align: left
        h2
          font-size: $font-size-large
          line-height: 1.2em
          font-weight: 700
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          margin-top: 4px
        p
          font-size: $font-size-small
          line-height: 24px
          span
            margin: 0 4px
    .actions
      font-size: $font-size-small
      color: $color-text-f
      text-align: left
      padding: 15px
      span
        display: inline-block
        &.right
          float: right
</style>
