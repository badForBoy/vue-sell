<template>
  <div class="goods">
    <div class="aside-left">
      <ul>
        <li v-for="item in goods">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="aside-right">
      <ul>
        <li v-for="item in goods">
          <ul>
            <li v-for="good in item.foods">
              <div class="pic">
                <img :src="imgurl(good.image_path)">
              </div>
              <div class="title">
                {{good.name}}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { ERR_OK } from '../../common/js/config'

  export default{
    data() {
      return {
        goods: []
      }
    },
    mounted() {
      this.getMenu()
    },
    methods: {
      getMenu() {
        this.axios.get('api/shopping/v2/menu', {params: {restaurant_id: this.$route.params.id}})
          .then((response) => {
            if (response.status === ERR_OK) {
              this.goods = response.data
              console.log(response.data)
            }
          })
      },
      imgurl(hash) {
        let url = ''
        if (hash.indexOf('jpeg') > 0) {
          url = `http://fuss10.elemecdn.com/${hash.substring(0, 1)}/${hash.substring(1, 2)}/${hash.substring(2)}.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
        } else {
          url = `http://fuss10.elemecdn.com/${hash.substring(0, 1)}/${hash.substring(1, 2)}/${hash.substring(2)}.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
        }
        return url
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .goods
    background: $color-background
    display: flex
    .aside-left
      flex: 0 0 90px
      ul
        background: $color-background-d
        li
          padding: 15px 5px
          line-height: 1.2
          font-size: $font-size-medium
          &.active
            background: $color-background
    .aside-right
      flex: 1
      ul
        li
          display: flex
          .pic
            flex: 0 0 90px
            overflow: hidden
            img
              width: 60px
              height: 60px
          .text
            flex: 1
</style>
