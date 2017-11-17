<template>
  <div class="business-list">
    <!--<h2 class="title">推荐商家</h2>-->
    <ul class="list-wrapper">
      <li v-for="(item, index) in businessList" class="item" @click="goShop(item.id)">
        <div class="pic">
          <img :src='imgUrl(item.image_hash)'>
        </div>
        <div class="text">
          <div class="text-item">
            <h2 class="text-header" v-html="item.name"></h2>
          </div>
          <div class="m_b_5 text-item">
            <p>月售{{item.distance}}</p>
          </div>
          <star :size="24" :scroll="item.rating"></star>
          <div class="m_b_5 text-item">
            <p><span>￥{{item.float_delivery_fee}}起送</span> | <span>配送费{{item.float_delivery_fee}}￥</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { optionBusiness } from '../../common/js/options'
  import { ERR_OK } from '../../common/js/config'
  import Star from '../../components/star/star.vue'

  export default{
    data() {
      return {
        businessList: []
      }
    },
    computed: {},
    mounted() {
      this.getBusinessList()
    },
    methods: {
      goShop(id) {
//        this.$emit('selectItem', id)
        this.$router.push({
          path: `/shop/${id}`
        })
      },
      imgUrl(hash) {
//        return `http://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
        return ''
      },
      getBusinessList() {
        this.axios.get('/api/shopping/restaurants', {params: optionBusiness})
          .then((response) => {
            console.log(response)
            if (response.status === ERR_OK) {
//              let foods = []
//              for (let i = 0; i < response.data.length; i++) {
//                if (response.data[i].foods.length > 2) {
//                  foods.push(response.data[i].foods)
//                }
//              }
              this.businessList = response.data
              console.log(this.businessList)
            }
          })
      }
    },
    components: {
      Star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .business-list
    .title
      color: $color-text
      font-weight: 700
      text-align: left
    .list-wrapper
      .item
        display: flex
        margin: 10px 0
        padding: 0 10px
        .pic
          width: 72px
          height: 72px
          overflow: hidden
          border-radius: 4px
          border: 1px solid rgba(0, 0, 0, .08)
          img
            width: 100%
        .text
          text-align: left
          flex: 0, 0, 215px
          padding-left: 10px
          color: $color-text-d
          font-size: $font-size-small-s
          display: flex
          flex-direction: column
          justify-content: center
          .m_b_5
            margin-bottom: 5px
          .text-item
            display: block
            .text-header
              margin: 0 0 5px 0
              padding: 0
              color: $color-text
              font-weight: 700
              font-size: $font-size-medium

</style>
