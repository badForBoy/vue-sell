<template>
  <div class="home">
    <hot-search></hot-search>
    <entries></entries>
    <business-list :id="id" @select="selectItem"></business-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import BusinessList from '../../components/business-list/business-list.vue'
  import Entries from '../../components/entries/entries.vue'
  import HotSearch from '../../components/hot-search/hot-search.vue'

  export default {
    data() {
      return {
        foods: '',
        id: ''
      }
    },
    mounted() {
      this.selectItem()
    },
    methods: {
      selectItem(id) {
        console.log(id)
        this.id = id
      }
    },
    components: {
      BusinessList,
      Entries,
      HotSearch
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
