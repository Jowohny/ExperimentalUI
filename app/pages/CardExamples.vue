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

	const linkItem = [
		{
			logo: "/ButtonLogos/youtubelogo.png",
			id: "39284",
			title: "YouTube",
			link: "https://youtube.com",
			color: "text-amber-600"
		},
		{
			logo: "/ButtonLogos/googlelogo.png",
			id: "21345",
			title: "Google",
			link: "https://google.com",
			color: "text-blue-600"
		},
		{
			logo: "/ButtonLogos/netflixlogo.png",
			id: "25321",
			title: "Netflix",
			link: "https://netflix.com",
			color: "text-orange-600"
		},
		{
			logo: "/ButtonLogos/facebooklogo.png",
			id: "25234",
			title: "Facebook",
			link: "https://facebook.com",
			color: "text-indigo-600"
		},
		{
			logo: "/ButtonLogos/amazonlogo.png",
			id: "74543",
			title: "Amazon",
			link: "https://amazon.com",
			color: "text-amber-600"
		},
		{
			logo: "/ButtonLogos/githublogo.png",
			id: "83735",
			title: "Github",
			link: "https://github.com",
			color: "text-blue-600"
		},
		{
			id: "84635",
			title: "Johny's Dev Portfolio",
			link: "https://vujohny.com",
			color: "text-orange-600"
		},
		{
			logo: "/ButtonLogos/linkedinlogo.png",
			id: "18347",
			title: "LinkedIn",
			link: "https://linkedin.com",
			color: "text-indigo-600"
		}
	]

	const techStack = [
		{
			techType: 'Framework',
			id: 'vue',
			name: 'Vue.js',
			description: 'The Progressive JavaScript Framework used for building user interfaces.',
			icon: '/TechStackIcons/NuxtIcon.webp',
			colSpan: 'col-span-3',
			color: 'text-green-400'
		},
		{
			techType: 'Library', 
			id: 'gsap',
			name: 'GSAP',
			description: 'Professional-grade animation library for the modern web.',
			icon: '/TechStackIcons/GSAPIcon.png',
			colSpan: 'col-span-2',
			color: 'text-emerald-500'
		},
		{
			techType: 'Language',
			id: 'swift',
			name: 'Swift',
			description: 'High-level general-purpose, multi-paradigm, compiled programming language, maintained by the open-source community.',
			icon: '/TechStackIcons/SwiftIcon.png',
			colSpan: 'col-span-3',
			color: 'text-orange-600'
		},
		{
			techType: 'Framework', 
			id: 'swiftui',
			name: 'SwiftUI',
			description: 'An innovative, exceptionally simple way to build user interfaces across all Apple platforms with the power of Swift.',
			icon: '/TechStackIcons/SwiftUIIcon.png',
			colSpan: 'col-span-4',
			color: 'text-blue-400'
		}
	]
</script>

<template>
	<div class="grid grid-cols-5 gap-4 px-4 mb-12">
		<CardTypeBase :class="card.colSpan" v-for="card in bentoItems" :item="card" />
	</div>

	<div class="flex flex-wrap gap-4 px-4 mb-12">
		<CardTypeLink class="w-fit" v-for="card in linkItem" :item="card"/>
	</div>

	<div class="grid grid-cols-8 gap-4 p-8">
     <CardTypeDetailDisplay v-for="tech in techStack" :class="tech.colSpan" :item="tech" />
  </div>
</template>