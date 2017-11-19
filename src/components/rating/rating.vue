<template>
  <div class="rating">
    <div class="all-score">
      <h1>{{scroll(scores.overall_score)}}</h1>
      <p>综合评价</p>
      <p class="small">高于周边商家</p>
    </div>
    <div class="other-score">
      <div class="rating-item">
        <div class="right-item">
          服务态度
        </div>
        <star :size="24" :scroll="scroll(scores.service_score)"></star>
      </div>
      <div class="rating-item">
        <div class="right-item">
          菜品评价
        </div>
        <star :size="24" :scroll="scroll(scores.food_score)"></star>
      </div>
      <div class="rating-item">
        <div class="right-item">
          送达时间
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { ERR_OK } from '../../common/js/config'
  import { optionRating } from '../../common/js/options'
  import Star from '../../components/star/star.vue'

  export default {
    data() {
      return {
        scores: {}
      }
    },
    mounted() {
      this.getScores()
      this.scroll()
    },
    methods: {
      getScores() {
        this.axios.get(`/api/ugc/v2/restaurants/2116702/ratings/scores`, {params: optionRating})
          .then((response) => {
            if (response.status === ERR_OK) {
              console.log(response.data)
              this.scores = response.data
            }
          })
      },
      scroll(val) {
        return Math.round(val * 10) / 10
      }
    },
    components: {
      Star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl"

  .rating
    display: flex
    padding: 10px 0
    .all-score
      flex: 0 0 120px
      border-right: 1px solid $color-background-d
      h1
        font-size: $font-size-large-x
        color: $color-theme-r
        font-weight: 700
        margin-bottom: 10px
      p
        font-size: $font-size-medium
        color: $color-text-d
        margin: 2px 0
        &.small
          font-size: $font-size-small
          margin-top: 5px
    .other-score
      flex: 1
      .rating-item
        display: flex
        margin-top: 7px
        .right-item
          flex: 0 0 80px
          font-size :$font-size-small
          color: $color-text
        .star
          flex: 1
          display: inline-block
          text-align: left
          font-size: $font-size-small
          color: $color-theme-r
</style>
