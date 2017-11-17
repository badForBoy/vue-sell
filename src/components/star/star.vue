<template>
  <div class="star">
    <div :class="starType">
      <span class="star-item" :class="cls" v-for="cls in itemClass"></span>
      <span>{{scroll}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const CLS_ON = 'on'
  const CLS_HALF = 'half'
  const CLS_OFF = 'off'
  const LEN = 5

  export default{
    props: {
      size: {
        type: Number
      },
      scroll: {
        type: Number
      }
    },
    computed: {
      starType() {
        return `star_${this.size}`
      },
      itemClass() {
        let ret = []
        let sc = Math.floor(this.scroll * 2) / 2
        let hasxs = sc % 1 !== 0
        let scroll = Math.floor(sc)
        for (let i = 0; i < scroll; i++) {
          ret.push(CLS_ON)
        }
        if (hasxs) {
          ret.push(CLS_HALF)
        }

        while (ret.length < LEN) {
          ret.push(CLS_OFF)
        }
        return ret
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .star
    .star_48
      display: inline-block
      .star-item
        display: inline-block
        background-repeat: no-repeat !important
        width: 20px
        height: 20px
        background-size: 20px 20px !important
      .on
        background: url('./star48_on@2x.png')
      .half
        background: url('./star48_half@2x.png')
      .off
        background: url('./star48_off@2x.png')
    .star_36
      display: inline-block
      .star-item
        display: inline-block
        background-repeat: no-repeat !important
        width: 16px
        height: 16px
        background-size: 16px 16px !important
      .on
        background: url('./star36_on@2x.png')
      .half
        background: url('./star36_half@2x.png')
      .off
        background: url('./star36_off@2x.png')
    .star_24
      display: inline-block
      .star-item
        display: inline-block
        background-repeat: no-repeat !important
        width: 12px
        height: 12px
        background-size: 12px 12px !important
      .on
        background: url('./star24_on@2x.png')
      .half
        background: url('./star24_half@2x.png')
      .off
        background: url('./star24_off@2x.png')

</style>
