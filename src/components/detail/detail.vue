<template>
  <div class="detail">
    detail
  </div>
</template>

<script type="text/ecmascript-6">
  import { optionsGetFoods } from '../../common/js/options'
  import { ERR_OK } from '../../common/js/config'

  export default{
    data() {
      return {
        detail: []
      }
    },
    mounted() {
      this.getDetail()
    },
    methods: {
      getDetail() {
        this.axios.get('/api/v3/flash/init', {params: optionsGetFoods})
          .then((response) => {
            if (response.status === ERR_OK) {
              let foods = []
              for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].foods.length > 2) {
                  foods.push(response.data[i].foods)
                }
              }
              this.foods = foods
              console.log(this.foods)
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
