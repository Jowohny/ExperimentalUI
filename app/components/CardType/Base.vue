<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import gsap from 'gsap'
	
	interface Card {
		id: number
		title: string
		subtitle: string
		desc: string
		tag: string
		color: string
	}
	
	const props = defineProps<{
		item: Card
	}>()
	
	const cardRef = ref<HTMLElement | null>(null)
	const contentRef = ref<HTMLElement | null>(null)
	const glowRef = ref<HTMLElement | null>(null)
	
	let ctx: gsap.Context
	
	const MAX_ROTATION = 8
	const DEPTH = 30 
	
	onMounted(() => {
		if (!cardRef.value) return
	
		ctx = gsap.context(() => {
			gsap.set(cardRef.value, { transformStyle: "preserve-3d" })
			gsap.set(contentRef.value, { transformStyle: "preserve-3d" })
		})
	
		cardRef.value.addEventListener('mousemove', handleMove)
		cardRef.value.addEventListener('mouseleave', handleLeave)
	})
	
	onUnmounted(() => {
		ctx?.revert()
		if (cardRef.value) {
			cardRef.value.removeEventListener('mousemove', handleMove)
			cardRef.value.removeEventListener('mouseleave', handleLeave)
		}
	})
	
	const handleMove = (e: MouseEvent) => {
		if (!cardRef.value || !contentRef.value || !glowRef.value) return
	
		const rect = cardRef.value.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2
		
		const mouseX = e.clientX - centerX
		const mouseY = e.clientY - centerY
	
		const rotateX = ((mouseY / (rect.height / 2)) * -MAX_ROTATION).toFixed(2)
		const rotateY = ((mouseX / (rect.width / 2)) * MAX_ROTATION).toFixed(2)
	
		gsap.to(cardRef.value, {
			rotateX: rotateX,
			rotateY: rotateY,
			duration: 0.4,
			ease: 'power2.out',
			overwrite: 'auto'
		})
	
		gsap.to(contentRef.value, {
			x: mouseX * 0.02,
			y: mouseY * 0.02,
			z: DEPTH,
			duration: 0.4,
			ease: 'power2.out'
		})
	
		gsap.to(glowRef.value, {
			opacity: 1,
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
			duration: 0.2,
			ease: 'power1.out'
		})
	}
	
	const handleLeave = () => {
		if (!cardRef.value || !contentRef.value || !glowRef.value) return
	
		gsap.to(cardRef.value, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.7,
			ease: 'elastic.out(1, 0.6)'
		})
	
		gsap.to(contentRef.value, {
			x: 0,
			y: 0,
			z: 0,
			duration: 0.7,
			ease: 'elastic.out(1, 0.6)'
		})
	
		gsap.to(glowRef.value, {
			opacity: 0,
			duration: 0.5
		})
	}
	</script>
	
	<template>
		<div class="relative w-full h-full perspective-1000 group">
			
			<div 
				ref="cardRef"
				class="relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
			>
				
				<div 
					ref="glowRef"
					class="absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 pointer-events-none mix-blend-overlay z-10"
				></div>
	
				<div :class="`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 z-0`"></div>
				
				<div class="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
	
				<div ref="contentRef" class="relative z-20 h-full p-8 flex flex-col justify-between">
					
					<div class="flex justify-between items-start">
						<span class="font-mono text-[10px] tracking-widest border border-zinc-700/50 rounded-full px-2 py-1 text-zinc-400 bg-zinc-900/50 backdrop-blur-md">
							{{ item.tag }}
						</span>
						<div class="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-colors duration-300">
							 <svg class="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
						</div>
					</div>
	
					<div class="mt-4">
						<h3 class="text-3xl font-bold text-white mb-1 tracking-tight">{{ item.title }}</h3>
						<p class="text-sm font-mono text-emerald-400 mb-3">{{ item.subtitle }}</p>
						<p class="text-zinc-400 text-sm leading-relaxed">{{ item.desc }}</p>
					</div>
	
				</div>
			</div>
		</div>
	</template>
	
	<style scoped>
	.perspective-1000 {
		perspective: 1000px;
	}
	</style>