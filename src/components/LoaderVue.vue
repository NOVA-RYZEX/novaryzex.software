<template>
	<div class="preloader" v-if="loading">
		<div class="loader"></div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const loading = ref(true);

	onMounted(() => {
		setTimeout(() => {
			loading.value = false;
		}, 6000);
	});
</script>

<style lang="scss">
	.preloader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader {
		width: 75px;
		aspect-ratio: 1;
		display: grid;
	}

	.loader:before,
	.loader:after {
		content: "";
		grid-area: 1/1;
		width: 35px;
		aspect-ratio: 1;
		box-shadow: 0 0 0 3px #fff inset;
		filter: drop-shadow(40px 40px 0 #fff);
		animation: l8 2s infinite alternate;
	}

	.loader:after {
		margin: 0 0 0 auto;
		filter: drop-shadow(-40px 40px 0 #fff);
		animation-delay: -1s;
	}

	@keyframes l8 {

		0%,
		10% {
			border-radius: 0;
		}

		30%,
		40% {
			border-radius: 50% 0;
		}

		60%,
		70% {
			border-radius: 50%;
		}

		90%,
		100% {
			border-radius: 0 50%;
		}
	}
</style>
