<script setup lang="ts">
	import { ref, computed } from 'vue';
	
	const themes = ['Card', 'Diagnostics', 'Gallery', 'Metrics', 'Scanner', 'Skills', 'System', 'Terminal']
	
	const currentIndex = ref(0)
	
	const isFirst = computed(() => currentIndex.value === 0)
	const isLast = computed(() => currentIndex.value === themes.length - 1)
	
	const nextPage = () => {
		if (!isLast.value) currentIndex.value++
	}
	
	const prevPage = () => {
		if (!isFirst.value) currentIndex.value--
	}
	
	const selectTheme = (index: number) => {
		currentIndex.value = index
	}
	</script>
	
	<template>
		<div class="min-h-screen bg-zinc-950 flex flex-col items-center pt-12 font-sans">
			
			<div class="w-full max-w-5xl px-6">
				
				<div class="relative flex items-center justify-between mb-8">
					
					<div class="flex gap-1 flex-1 justify-center">
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
							{{ theme }}
						</button>
					</div>
	
				</div>
	
				<div class="flex items-center justify-center gap-6">
					
					<button 
						@click="prevPage" 
						:disabled="isFirst"
						class="group flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
					>
						<span class="text-zinc-400 group-hover:-translate-x-1 transition-transform">←</span>
						<span class="text-sm font-mono text-zinc-300">PREV</span>
					</button>
	
					<div class="font-mono text-xs text-zinc-600 tracking-widest">
						0{{ currentIndex + 1 }} / 0{{ themes.length }}
					</div>
	
					<button 
						@click="nextPage" 
						:disabled="isLast"
						class="group flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
					>
						<span class="text-sm font-mono text-zinc-300">NEXT</span>
						<span class="text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
					</button>
	
				</div>
	
			</div>
		</div>
	</template>