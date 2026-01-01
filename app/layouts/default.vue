<script setup lang="ts">
	import { computed } from 'vue';
	
	const route = useRoute()
	
	const themes = [
		{ url: '/cardexamples', component: 'Card' }, 
		{ url: '/diagnosticexamples', component: 'Diagnostics' }, 
		{ url: '/galleryexamples', component: 'Gallery' }, 
		{ url: '/metricexamples', component: 'Metrics' }, 
		{ url: '/scannerexamples', component: 'Scanner' }, 
		{ url: '/skillsexamples', component: 'Skills' }, 
		{ url: '/systemexamples', component: 'System' }, 
		{ url: '/terminalexamples', component: 'Terminal' }
	]
	
	const currentIndex = computed(() => {
		const currentPath = route.path
		const index = themes.findIndex(theme => theme.url === currentPath)
		return index >= 0 ? index : 0
	})
	
	const isFirst = computed(() => currentIndex.value === 0 || currentIndex.value === -1)
	const isLast = computed(() => currentIndex.value === themes.length - 1 || currentIndex.value === -1)

	const nextPage = () => {
		if (!isLast.value) {
			const nextIndex = currentIndex.value + 1
			const nextTheme = themes[nextIndex]
			if (nextTheme) {
				navigateTo(nextTheme.url)
			}
		}
	}
	
	const prevPage = () => {
		if (!isFirst.value) {
			const prevIndex = currentIndex.value - 1
			const prevTheme = themes[prevIndex]
			if (prevTheme) {
				navigateTo(prevTheme.url)
			}
		}
	}
	
	const selectTheme = (index: number) => {
		const theme = themes[index]
		if (theme) {
			navigateTo(theme.url)
		}
	}
	</script>
	
	<template>
		<div class="min-h-screen bg-zinc-950 flex flex-col z-10 items-center pt-12 font-sans">
			<div class="w-full px-6">
				<div class="relative flex items-center justify-between mb-8">
					<div class="flex gap-1 flex-1 justify-center">
						<button 
							@click="prevPage" 
							:disabled="isFirst"
							class="group flex items-center gap-3 px-6 py-1 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
						>
							<span class="text-zinc-400 group-hover:-translate-x-1 transition-transform">←</span>
							<span class="text-sm font-mono text-zinc-300">PREV</span>
						</button>
						<button 
							v-for="(theme, index) in themes" 
							:key="theme"
							@click="selectTheme(index)"
							class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group"
							:class="[
								index === currentIndex
									? 'text-white bg-zinc-800 shadow-inner' 
									: 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800'
							]"
						>	
							<NuxtLink :to="theme.url">
								{{ theme.component }}
							</NuxtLink>
						</button>
						<button 
							@click="nextPage" 
							:disabled="isLast"
							class="group flex items-center gap-3 px-6 py-1 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
						>
							<span class="text-sm font-mono text-zinc-300">NEXT</span>
							<span class="text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
						</button>
					</div>
				</div>
				<slot />
			</div>
		</div>
	</template>