<template>
  <a-layout style="background: #fff; height:100%">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        mode="inline"
        style="height: 100%"
        :default-selected-keys="['1']"
      >
        <a-menu-item key="1" @click="changeContent(1)">个人信息</a-menu-item>
        <a-menu-item key="2" @click="changeContent(2)">通知</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content :style="{ padding: '0 24px', minHeight: '50vh' }">
      <div v-if="contentNumber==1">
        个人中心
      </div>
      <div v-else-if="contentNumber==2">
        通知
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: "UserCenter",
  data() {
    return {
      contentNumber: 1,
    }
  },
  methods:{
    changeContent(number){
      this.contentNumber = number;
    }
  },
  created() {
    fetch("https://www.fastmock.site/mock/0aee7559464fadc986c2e38e63492a86/spm/book/detail", {
      "method": "GET"
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request Failed', err))
    console.log(111);
  }
}
</script>

<style>
</style>