<template>
	<div class="App">
		<LoaderVue />
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
		</nav>
		<router-view />
	</div>
</template>

<script lang="ts" setup>
	import LoaderVue from '@/components/LoaderVue.vue'
</script>

<style lang="scss" scoped></style>
