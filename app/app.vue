import { gsap } from "gsap";

<script setup lang="ts">
	import { ref } from 'vue'
	
	const uiExamples = ['Original Sin', 'Techno', 'Martianal']
	const currentUI = ref<string>('')
	
	const changeButton = (uiName: string) => {
		currentUI.value = uiName
	}
</script>
	
<template>
	<div class="flex justify-center">
		<div class="mt-8 rounded-full bg-gray-300 flex">
			<h1
				v-for="ui in uiExamples"
				:key="ui"
				@click="changeButton(ui)"
				:class="[
					'font-semibold text-center px-4 py-2 text-xl cursor-pointer',
					currentUI === ui && 'rounded-full bg-gray-400'
				]"
			>
				{{ ui }}
			</h1>
		</div>
	</div>
</template>
	