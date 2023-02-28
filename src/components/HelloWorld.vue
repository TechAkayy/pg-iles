<script setup lang="ts">
	defineProps<{
		msg: String
	}>()
</script>
<template>
    <div class="greetings">
        <div style="display: flex; align-items: center; justify-content: center">
            <h1 class="green" style="min-width: 250px">Iles with Vue Designer!</h1>
            <BaseIcon width="30px" style="margin-left: 10px; min-width: 30px" class="green"/>
        </div>
        <h3>
			You’ve successfully created a project with <a target="_blank" href="https://iles-docs.netlify.app/">îles</a> + <a target="_blank" href="https://vitejs.dev/">Vite</a> + <FrameworkLink client:none/>. What's next? </h3>
    </div>
</template>
<style scoped>
	h1 {
		font-weight: 500;
		font-size: 2.6rem;
	}
	h3 {
		font-size: 1.2rem;
	}
	.greetings h1,
	.greetings h3 {
		text-align: center;
	}
	@media (min-width: 1024px) {
		.greetings h1,
		.greetings h3 {
			display: block;
			text-align: left;
		}
	}
</style>
