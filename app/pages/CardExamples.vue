<script setup lang="ts">
	const bentoItems = [
		{ 
			id: 1, 
			colSpan: 'col-span-2',
			title: 'Aery LLC', 
			subtitle: 'Front-End Intern',
			desc: 'Led React architecture. Optimized GSAP animations boosting performance by 300% (20 to 60 FPS).', 
			tag: 'EXPERIENCE',
			color: 'from-emerald-500 to-teal-900'
		},
		{ 
			id: 2, 
			colSpan: 'col-span-1', 
			title: 'QTC Leidos', 
			subtitle: 'Software Engineer',
			desc: 'Built KPI dashboards reducing analysis time by 60%. Fine-tuned RoBERTa models.', 
			tag: 'EXPERIENCE',
			color: 'from-blue-500 to-indigo-900'
		},
		{ 
			id: 3, 
			colSpan: 'col-span-2', 
			title: 'Core Stack', 
			subtitle: 'Technical Arsenal',
			desc: 'Vue, Nuxt, React, TypeScript, GSAP, Tailwind, Python, AWS.', 
			tag: 'SKILLS',
			color: 'from-violet-500 to-purple-900'
		},
		{ 
			id: 4, 
			colSpan: 'col-span-3', 
			title: 'AI Tracker', 
			subtitle: 'Full Stack Project',
			desc: 'Event management app with SwiftUI & Vapor. 80ms API response times.', 
			tag: 'PROJECT',
			color: 'from-rose-500 to-red-900'
		},
		{ 
			id: 5, 
			colSpan: 'col-span-2', 
			title: 'CSULA \'25', 
			subtitle: 'B.S. Comp Sci',
			desc: 'GPA 3.83. Dean\'s List. Relevant Coursework: AI, OS, Data Structures.', 
			tag: 'EDUCATION',
			color: 'from-amber-500 to-orange-900'
		}
	]

</script>

<template>
	<div class="grid grid-cols-5 gap-4 px-4">
		<CardTypeBase :class="card.colSpan" v-for="card in bentoItems" :item="card" />
	</div>
	<Diagnostics/>
</template>