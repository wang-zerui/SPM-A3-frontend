<template>
  <div>
      图书详情：{{ $route.params.id }}
      使用$route.params.id可以获取图书id，使用这个id调用图书api
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      id: "",
      bookInfo: {}
    }
  },
  methods: {
    getBookId(){
      return this.$router.params.id
    }
  },
  created(){
    this.id = this.getBookId();
    console.log(this.id);
  }
  
}
</script>

<style>

</style>