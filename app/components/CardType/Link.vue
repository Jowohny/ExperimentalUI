<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import gsap from 'gsap'
	
	interface LinkCard {
		logo?: string
		id: number
		title: string
		link: string
		color: string
	}
	
	const props = defineProps<{
		item: LinkCard
	}>()
	
	const cardRef = ref<HTMLElement | null>(null)
	const contentRef = ref<HTMLElement | null>(null)
	
	let ctx: gsap.Context
	
	const MAX_ROTATION = 20
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
		if (!cardRef.value || !contentRef.value) return
	
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
	}
	
	const handleLeave = () => {
		if (!cardRef.value || !contentRef.value) return
	
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
	}
	</script>
	
	<template>
		<div class="relative perspective-1000 group">
			
			<div 
				ref="cardRef"
				class="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
			>
					
				<div class="flex items-center bg-zinc-950 relative">
    
					<div
						class="absolute inset-0 z-0 pointer-events-none"
						:style="{
							backgroundImage: `
								linear-gradient(to right, #27272a 1px, transparent 1px),
								linear-gradient(to bottom, #27272a 1px, transparent 1px)
							`,
							backgroundSize: '40px 40px',
							maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 80%)',
							WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 80%)'
						}"
					></div>
					<div ref="contentRef" class="relative z-20 px-8 py-4 flex items-center gap-4">
						<div v-if="item.logo" class="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
							<img :src="item.logo" class="w-full h-full object-contain" loading="lazy"/>
						</div>
						<p :class="item.color" class="font-mono font-semibold tracking-wide text-center text-xl">
							{{ item.title }}
						</p>
						<NuxtLink :to="item.link" target="_blank">
							<div class="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-colors duration-300">
								<svg class="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
							</div>
						</NuxtLink>
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

	