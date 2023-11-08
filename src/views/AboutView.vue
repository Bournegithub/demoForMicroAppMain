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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
