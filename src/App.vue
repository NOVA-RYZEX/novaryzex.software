<template>
	<div class="App position-relative">
		<transition name="fade" mode="out-in">
			<div v-if="loading">
				<LoaderVue />
			</div>
			<div v-else v-cloak>
				<router-view />
			</div>
		</transition>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from 'vue'
	import LoaderVue from '@/components/LoaderVue.vue'

	const loading = ref(true)

	onMounted(() => {
		setTimeout(() => {
			loading.value = false
		}, 5000)
	})

</script>

<style lang="scss">
	.App {

		.fade-enter-active,
		.fade-leave-active {
			transition: opacity 0.5s;
		}

		.fade-enter,
		.fade-leave-to {
			opacity: 0;
		}
	}
</style>
