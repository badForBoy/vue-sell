<template>
  <div class="shop-foods-type">
    shop-foods-type
  </div>
</template>

<script type="text/ecmascript-6">
  import { ERR_OK } from '../../common/js/config'

  export default{
    data() {
      return {
        foods: []
      }
    },
    mounted() {
      this.getFoods()
    },
    methods: {
      getFoods() {
        this.axios.get('/api/shopping/v2/menu', {
          params: {
            restaurant_id: 555696,
            s_type: 0
          }
        })
          .then((response) => {
            if (response.status === ERR_OK) {
              let foods = []
              for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].foods.length > 2) {
                  foods.push(response.data[i].foods)
                }
              }
              this.businessList = foods[0]
              console.log(this.businessList)
            }
          })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
