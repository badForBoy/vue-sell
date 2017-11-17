<template>
  <div class="entries">
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item v-for="(item, index) in ret"  v-bind:key="item.id">
        <ul>
          <li class="item" v-for="one in item" :key="one.id">
            <div class="pic">
              <img :src="imgUrl(one.image_hash)">
            </div>
            <span>{{one.name}}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
  import { optionsGetFoods } from '../../common/js/options'
  import { ERR_OK } from '../../common/js/config'
  import { Swipe, SwipeItem } from 'mint-ui'

  const SIZE = 8

  export default{
    data() {
      return {
        entries: [],
        ret: []
      }
    },
    computed: {},
    mounted() {
      this.getBusinessList()
      this.getList()
    },
    methods: {
      imgUrl(hash) {
        return `http://fuss10.elemecdn.com/${hash.substr(0, 1)}/${hash.substr(1, 2)}/${hash.substr(3)}.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
      },
      getBusinessList() {
        const option = Object.assign({}, optionsGetFoods, {'templates[]': 'main_template'})
        this.axios.get('/api/v2/entries', {params: option})
          .then((response) => {
            if (response.status === ERR_OK) {
              this.entries = response.data[0].entries
            }
          })
      },
      getList() {
        const option = Object.assign({}, optionsGetFoods, {'templates[]': 'main_template'})
        this.axios.get('/api/v2/entries', {params: option})
          .then((response) => {
            if (response.status === ERR_OK) {
              /*
               * 将一个数组分成几个同等长度的数组
               * array[分割的原数组]
               * SIZE[每个子数组的长度]
               * Math.ceil() 向上取整
               */
              const list = response.data[0].entries
              let ret = []
              for (let i = 0; i < Math.ceil(list.length / SIZE); i++) {
                let start = i * SIZE
                let end = start + SIZE
                ret.push(list.slice(start, end))
              }
              this.ret = ret
            }
          })
      }
    },
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .entries
    .mint-swipe
      height: 200px
    ul
      font-size: 0
      text-align: left
      .item
        display: inline-block
        width: 25%
        font-size: $font-size-medium
        color: $color-text-d
        margin-top: 10px
        text-align: center
        .pic
          overflow: hidden
          img
            width: 100%
            width: 48px
            height: 48px
</style>
