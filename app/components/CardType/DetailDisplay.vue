<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import gsap from 'gsap'
	
	interface TechItem {
		techType: string
		id: number | string
		name: string        
		description: string 
		icon?: string       
		color?: string     
	}
	
	const props = defineProps<{
		item: TechItem
	}>()
	
	const cardRef = ref<HTMLElement | null>(null)
	const contentRef = ref<HTMLElement | null>(null)
	
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
		<div class="relative w-full h-full perspective-1000 group">
			
			<div 
				ref="cardRef"
				class="relative w-full h-full bg-[#101014] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
			>
				
				<div
					class="absolute inset-0 z-0 pointer-events-none opacity-60"
					:style="{
						backgroundImage: `
							repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
							repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
							repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
							repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
							radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
						`,
						backgroundSize: '80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%',
						backgroundPosition: '0 0, 0 0, 0 0, 40px 40px, center'
					}"
				></div>
	
				<div ref="contentRef" class="relative z-10 px-6 pb-4 flex flex-col items-center h-full">

					<div class="flex justify-center" :class="item.color">
						<h3 class="font-sans font-semibold text-sm tracking-wide px-2 pt-3" :class="item.color">
							{{ item.techType }}
						</h3>
					</div>

					<div class="flex flex-row gap-6">
						<div class="flex-shrink-0">
							<div class="w-16 h-16 rounded-lg border border-zinc-700 flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:border-emerald-500/50 transition-colors duration-300">
								<img v-if="item.icon" :src="item.icon" class="w-10 h-10 object-contain" />
						
								<span v-else class="text-2xl font-bold text-zinc-500 group-hover:text-white transition-colors">
									{{ item.name.charAt(0) }}
								</span>
							</div>
						</div>
						<div class="flex flex-col justify-center">
							<h3 class="text-xl font-bold tracking-wide text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
								{{ item.name }}
							</h3>
							<p class="text-sm text-zinc-400 font-medium leading-snug">
								{{ item.description }}
							</p>
						</div>
					</div>
	
				</div>
	
				<div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
	
			</div>
		</div>
	</template>
	
	<style scoped>
	.perspective-1000 {
		perspective: 1000px;
	}
	</style>