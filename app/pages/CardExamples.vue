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

	const singleCardDisplay = {
			id: "634521",
			title: "PatternCraft",
			link: "https://patterncraft.fun",
			color: "text-pink-500"
		}
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


	
  <div class="grid grid-cols-5 gap-4 p-8">
    <CardTypeBlank 
      class="col-span-2"
      backgroundLink="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80"
    >
      <div class="flex flex-col justify-end h-full">
        <h3 class="text-2xl font-bold text-white">Retro Tech</h3>
        <p class="text-zinc-300">A showcase of vintage computing.</p>
      </div>
    </CardTypeBlank>

		<CardTypeBlank 
      class="col-span-2" 
      backgroundLink="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
    >
      <div class="flex flex-col justify-end h-full">
        <h3 class="text-2xl font-bold text-white">This is technically a blank card</h3>
        <p class="text-orange-500">Go on and fill this with whatever you feel like..</p>
      </div>
    </CardTypeBlank>

		<CardTypeBlank 
      class="col-span-3" 
      backgroundLink="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80"
    >
			<div
				class="absolute inset-0 z-0 pointer-events-none"
				:style="{
					background: `
						radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
						radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
						radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
						radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
						linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
					`
				}"
			/>
			<div class="h-12"/>
    </CardTypeBlank>

		<CardTypeBlank 
      class="col-span-2" 
      backgroundLink="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80"
    >
			<h3 class="text-white text-lg font-inter text-center font-semibold tracking-wide">
				This card takes the height of the tallest card in in the given row
			</h3>
			<p class="text-center font-sans font-thin tracking-wide text-white">
				Do what you will with this information, I hope to those who use this card componont 
				code found in my github repository it do  great things with it, adiou
			</p>
    </CardTypeBlank>

		<CardTypeBlank class="col-span-5">
			<div
				class="absolute inset-0 z-0 pointer-events-none"
				:style="{
					backgroundImage: `
						repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 20px),
						repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 20px)
					`,
					backgroundSize: '40px 40px'
				}"
			/>

			<h3 class="text-white text-xl font-inter text-center font-semibold tracking-wide m-4">
				So the good thing about this type of card in comparison to some of the other cards I have shown so far.
			</h3>
			<p class="text-center font-sans font-thin tracking-wide text-white px-4">
				This card can quite literally contain anything you want in it as other others are kind of preset, you put in information
				and it the component displays it for you. This you have full control over everthing in it. Since this is more of a component
				to wrap whole parts of your code you want in a card. This sentence here is just chatter to fill the rest of the line lol.
				Here are some images.
			</p>

			<div class="flex justify-around m-8">
				<img class="object-contain rounded h-12 w-12" src="/ButtonLogos/amazonlogo.png"/>
				<img class="object-contain rounded h-12 w-12" src="/TechStackIcons/GSAPIcon.png"/>
				<img class="object-contain rounded h-12 w-12" src="/ButtonLogos/googlelogo.png"/>
				<img class="object-contain rounded h-12 w-12" src="/TechStackIcons/SwiftIcon.png"/>
				<img class="object-contain rounded h-12 w-12" src="/ButtonLogos/linkedinlogo.png"/>
				<img class="object-contain rounded h-12 w-12" src="/TechStackIcons/NuxtIcon.webp"/>
			</div>
    </CardTypeBlank>

		<CardTypeBlank 
			class="col-span-5"
		>
			<div
				class="absolute inset-0 z-0 pointer-events-none opacity-60"
				:style="{
					backgroundImage: `
						linear-gradient(to right, #fff000 1px, transparent 1px),
						linear-gradient(to bottom, #fff000 1px, transparent 1px)
					`,
					backgroundSize: '40px 40px',
					maskImage: 'radial-gradient(ellipse 80% 80% at 60% 60%, #000 10%, transparent 90%)',
					WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 60% 60%, #000 10%, transparent 90%)'
				}"
			/>
			<h1 class="text-4xl tracking-wide text-yellow-100 font-mono text-center font-bold mb-4 z-20">In Terms of Backgrounds</h1>
			<p class="text-md tracking-wide text-blue-200 font-inter text-left mb-4 z-20">
				Another really good thing about this component, you don't even need to add a background. If you do decide to have a blank
				background, then all the power to yah. Whatever you decide to put in here, this card will always have that 3D paralaxx effect
				to go along with it. If you don't want to be limited to links to provide the url, then you can make your own at any time. 
				Whether its coding it on your own or finding more copy paste to paste on top of this. I personally go here for some need 
				little background when I'm feeling a little lazy: 
			</p>

			<span class="flex flex-wrap gap-4 block justify-center">
				<CardTypeLink :item="singleCardDisplay"/>
			</span>
		</CardTypeBlank>
  </div>
</template>