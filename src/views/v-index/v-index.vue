<template>
    <div>
      <h1>home</h1>
      <c-hello-world />
    </div>
</template>

<script>
import cHelloWorld from '@/components/c-hello-world'
import {
  myPrize
} from '@/api/index'

export default {
  name: 'home',
  data () {
    return {
      myPrizes: []
    }
  },
  components: {
    cHelloWorld
  },
  methods: {
    // 获取奖品
    fecthMyPrize () {
      myPrize()
        .then(data => {
          if (data.code > 0) {
            this.myPrizes = data.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.fecthMyPrize()
    console.log(this.$store.state.userinfo.data.activity_coin)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 h1 {
   color: #f00;
 }
</style>
