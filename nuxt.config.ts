// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'Nuxt 3 + Tailwind CSS',
			meta: [{ name: 'description', content: 'Nuxt 3 + Tailwind CSS' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
})
