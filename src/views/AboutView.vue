<template>
  <div class="about">
    <h1>This is an nuxt3 page</h1>
    <micro-app
			name='micro-app-nuxt3'
			url='https://microapp.yangxuhui.cn/nuxt3/single'
      iframe
			ssr
		>
		</micro-app>
  </div>
</template>
<!--
  如果将主应用配置的iframe去除
  路由会正常显示，但是会报错，实际显示的页面是子应用的首页而不是single页面
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
