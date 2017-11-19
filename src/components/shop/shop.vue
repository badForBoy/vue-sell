<template>
  <div class="shop">
    <shop-header :shopInfo="shopInfo" :imgurl="imgurl" :bgimgurl="bgimgurl"></shop-header>
    <div class="tab">
      <router-link class="item" tag="span" :to="{path: `/shop/goods/${id}`}"><span>商品</span></router-link>
      <router-link class="item" tag="span" :to="{path: `/shop/rating/${id}`}"><span>评价</span></router-link>
      <router-link class="item" tag="span" :to="{path: `/shop/active/${id}`}"><span>店铺</span></router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from '../../components/shop-header/shop-header.vue'
  import { ERR_OK } from '../../common/js/config'
  import { optionsRatings } from '../../common/js/options'
  import { imgUrl, bgImgUrl } from '../../common/js/imgUrl'

  export default{
    data() {
      return {
        shopInfo: {},
        imgurl: '',
        bgimgurl: '',
        id: ''
      }
    },
    mounted() {
      this.getFoods()
      this.id = this.$route.params.id
    },
    methods: {
      getFoods() {
        // 店铺顶部信息 基础信息
        this.axios.get(`/api/shopping/restaurant/${this.$route.params.id}`, {params: optionsRatings})
          .then((response) => {
            if (response.status === ERR_OK) {
              this.shopInfo = response.data
              console.log(this.shopInfo)
              this.imgurl = imgUrl(response.data.image_path)
              this.bgimgurl = bgImgUrl(response.data.image_path)
            }
          })
      }
    },
    components: {
      ShopHeader
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
    .tab
      display: flex
      .item
        flex: 1
        display: inline-block
        height: 34px
        line-height: 36px
        &.router-link-exact-active
          color: $color-theme
          span
            border-bottom: 2px solid
            display: inline-block
            height: 34px
</style>
