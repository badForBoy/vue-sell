<template>
  <div class="home">
    <!--<popup></popup>-->
    <hot-search></hot-search>
    <entries></entries>
    <business-list  @goshop="selectItem"></business-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import BusinessList from '../../components/business-list/business-list.vue'
  import Entries from '../../components/entries/entries.vue'
  import HotSearch from '../../components/hot-search/hot-search.vue'
  import Popup from '../../components/popup/popop.vue'

  export default {
    data() {
      return {
        foods: ''
      }
    },
    mounted() {
    },
    methods: {
      selectItem(id) {
        this.$router.push({
          path: `/shop/goods/${id}`
        })
      }
    },
    components: {
      BusinessList,
      Entries,
      HotSearch,
      Popup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
