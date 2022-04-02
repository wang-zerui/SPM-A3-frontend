<template>
  <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            style="height: 100%"
          >
            <a-menu-item key="1">个人中心</a-menu-item>
            <a-menu-item key="2">通知</a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>