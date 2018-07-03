<template>
    <div>
      <h1 @click="phone">Sho222p<span>go</span></h1>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  components: {

  },
  methods: {
    phone (val) {
      if (val) this.isError = false
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1 {
    color: #ff4444;
    span {
      margin-left: 50px;
    }
  }
</style>

<style lang="scss" scoped>

</style>
