<template>
  <div class="hot-search">
    <div class="search-box">
      <input type="text">
    </div>
    <div class="hot-list">
      <div class="list-box" ref="one">
        <span v-for="item in hotList">
        {{item.search_word}}
      </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { optionsGetFoods } from '../../common/js/options'
  import { ERR_OK } from '../../common/js/config'

  export default{
    data() {
      return {
        hotList: []
      }
    },
    mounted() {
      this.getHotList()
//      console.log(this.$refs.one.clientWidth)
//      console.log(0.2 !== 0)
    },
    created() {
    },
    methods: {
      getHotList() {
        const option = Object.assign({}, optionsGetFoods, {'templates[]': 'main_template'})
        this.axios.get('/api/v3/hot_search_words', {params: option})
          .then((response) => {
            if (response.status === ERR_OK) {
              this.hotList = response.data
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .hot-search
    background: $color-theme
    padding-bottom: 10px
    .search-box
      padding: 15px 20px
      border-1px($color-theme-f)
      input
        height: 32px
        line-height: 32px
        padding: 5px 10px
        box-sizing: border-box
        width: 100%
    .hot-list
      height: 30px
      line-height: 30px
      font-size: 0
      overflow: hidden
      padding: 0 20px
      .list-box
        text-align: left
        white-space: nowrap
        overflow-x: auto
        span
          display: inline-block
          font-size: $font-size-small
          color: $color-text-f
          margin-right: 12px
</style>
