<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', minHeight: '6vh' }" class="header">
        <div class="logo" />
        <div class="header-left">
           <a-menu
              theme="dark"
              mode="horizontal"
              :style="{ lineHeight: '6vh' }"
            >
              <a-menu-item key="1" @click="changeMenu('/helloworld')"> HelloWorld </a-menu-item>
              <a-menu-item key="2" @click="changeMenu('/book/search')"> 图书查询 </a-menu-item>
              <a-menu-item key="3" @click="changeMenu('/user/borrowing')"> 在借图书 </a-menu-item>
              <a-menu-item key="4" @click="changeMenu('/user/borrowing/history')"> 借书历史 </a-menu-item>
              <a-menu-item key="5" @click="changeMenu('/user/reservation')"> 预约记录 </a-menu-item>
            </a-menu>
        </div>
       
        <div class="header-right">
          <span class="header-msg">
            <a-dropdown class="avatar" v-if="isLogin">
              <a-menu slot="overlay">
                <a-menu-item @click="changeMenu('/user')"> 个人中心 </a-menu-item>
                <a-menu-item @click="changeMenu('/logout')"> 退出登录 </a-menu-item>
              </a-menu>
                <a-space>
                  <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="backgroundColor:#87d068" />
                  <span style="color: white">用户名</span><a-icon type="down" />
                </a-space>
            </a-dropdown>
            <a-button type="link" v-else block>
              登录
            </a-button>
          </span>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px', minHeight: '89vh' }">
        <div :style="{ background: '#fff', padding: '20px', minHeight: '89vh',marginTop: '32px' }">
          <router-view />
        </div>
      </a-layout-content>
        <a-layout-footer style="text-align: center">
          @SPM-A3
        </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      collapsed: false,
      isLogin: true
    };
  },
  methods: {
    changeMenu(route) {
      console.log(route);
      //获取路由对象并切换
      this.$router.push(route).catch((err) => {
        console.log("输出报错", err);
      });
    },
  },
  components: {
    
  },
};
</script>

<style>
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
