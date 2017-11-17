<template>
  <div class="shop">
    <router-view></router-view>
    <shop-header :shopInfo="shopInfo" :bgimgurl="bgimgurl" :shopimgurl="shopimgurl"></shop-header>
    <tab></tab>
    <shop-foods-type></shop-foods-type>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from '../../components/shop-header/shop-header.vue'
  import Tab from '../../components/tab/tab.vue'
  import ShopFoodsType from '../../components/shop-foods-type/shop-foods-type.vue'
  import { ERR_OK } from '../../common/js/config'
  import { optionsRatings } from '../../common/js/options'
  import { bgImgUrl, imgUrl } from '../../common/js/imgUrl'

  export default{
    data() {
      return {
        shopInfo: {},
        bgimgurl: '',
        shopimgurl: ''
      }
    },
    props: {
      id: {
        type: Number
      }
    },
    mounted() {
      this.getFoods()
    },
    methods: {
      getFoods() {
        // 店铺顶部信息 基础信息
        this.axios.get(`/api/shopping/restaurant/${this.$route.params.id}`, {params: optionsRatings})
          .then((response) => {
            if (response.status === ERR_OK) {
              this.shopInfo = response.data
              console.log(this.shopInfo)
              this.bgimgurl = bgImgUrl(this.shopInfo.image_path)
              this.shopimgurl = imgUrl(this.shopInfo.image_path)
            }
          })
      }
    },
    components: {
      ShopHeader,
      Tab,
      ShopFoodsType
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
