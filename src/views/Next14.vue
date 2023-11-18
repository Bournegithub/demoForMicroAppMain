<template>
  <div class="about">
    <h1>This is an nuxt14 page</h1>
    <micro-app
      name="micro-app-next14"
      url="https://microapp.yangxuhui.cn/next14/single"
      ssr
    >
    </micro-app>
  </div>
</template>
<!--
  页面未正常显示next14的single页面,
  此时点击其他路由的时候会出现异常, 子应用页面会全部显示（基座页面菜单看不到了），url仍是原基座页面的url
-->
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
