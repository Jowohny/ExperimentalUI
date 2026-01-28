<script setup lang="ts">
	import { ref, onMounted, onUnmounted, computed } from 'vue'
	import gsap from 'gsap'

	const props = defineProps<{
		backgroundLink?: string
	}>()

	const cardRef = ref<HTMLElement | null>(null)
	const contentRef = ref<HTMLElement | null>(null)
	let ctx: gsap.Context

	const MAX_ROTATION = 5
	const DEPTH = 20

	onMounted(() => {
		if (!cardRef.value) return

		ctx = gsap.context(() => {
			gsap.set(cardRef.value, { transformStyle: "preserve-3d" })
			if (contentRef.value) {
				gsap.set(contentRef.value, { transformStyle: "preserve-3d" })
			}
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
		if (!cardRef.value) return

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

		if (contentRef.value) {
			gsap.to(contentRef.value, {
				x: mouseX * 0.02,
				y: mouseY * 0.02,
				z: DEPTH,
				duration: 0.4,
				ease: 'power2.out'
			})
		}
	}

	const handleLeave = () => {
		if (!cardRef.value) return
		gsap.to(cardRef.value, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'elastic.out(1, 0.6)' })
		if (contentRef.value) {
			gsap.to(contentRef.value, { x: 0, y: 0, z: 0, duration: 0.7, ease: 'elastic.out(1, 0.6)' })
		}
	}

	const backgroundStyle = computed(() => {
		if (props.backgroundLink) {
			return {
				backgroundImage: `url('${props.backgroundLink}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			}
		}
		return {}
	})

</script>

<template>
	<div class="relative perspective-1000 group">
		
		
		<div 
			ref="cardRef"
			class="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
		>
			<div 
				class="absolute inset-0 z-10 bg-black transition-opacity duration-300 text-white"
				:style="backgroundStyle"
			>
		</div>	
			
			<div ref="contentRef" class="relative z-20  p-6">
				<slot />
			</div>

			<div class="absolute inset-0 z-30 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>

		</div>
	</div>
</template>

<style scoped>
.perspective-1000 {
	perspective: 1000px;
}
</style>