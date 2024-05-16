import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

export default defineConfig({
	lang: 'zh-CN',
	base: '/',
	title: 'VCBot',
	description: '',
        head: [
        ['link', { rel: 'icon', href: '/favicon.jpg' }],
        ['link', { rel: 'stylesheet', href: 'https://unpkg.com/simple-icons-font@v11/font/simple-icons.min.css'}]
        ],
	vite: {
		plugins: [
			AutoSidebar({
				titleFromFile: true
				//TODO
			})
		]
	},
	themeConfig: {
		logo: 'favicon.jpg',
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024 VCBots'
		},
		nav: [
			{
				text: '用户文档',
				link: '/guide/'
			},
			{
				text: '部署文档',
				link: '/config/'
			},
			{
				text: '公共机器人',
				link: 'https://qm.qq.com/q/9SrCmseRZC'
			}
		],
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/vcbots/vcbot'
			},
			{
				icon: {
					svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.9139 14.529C19.7336 13.955 19.4877 13.2856 19.2385 12.643L18.3288 10.3969C18.3295 10.371 18.3408 9.92858 18.3408 9.70053C18.3408 5.8599 16.5082 2.00037 12.0009 2C7.49403 2.00037 5.66113 5.8599 5.66113 9.70053C5.66113 9.92858 5.67237 10.371 5.67312 10.3969L4.76379 12.643C4.51453 13.2856 4.26827 13.955 4.08798 14.529C3.2285 17.2657 3.507 18.3982 3.71915 18.4238C4.17419 18.4779 5.49021 16.3635 5.49021 16.3635C5.49021 17.5879 6.12741 19.1858 7.5064 20.3398C6.99064 20.4971 6.35868 20.7388 5.95237 21.0355C5.58729 21.3025 5.63302 21.5743 5.69861 21.6841C5.9876 22.1661 10.6542 21.9918 12.0017 21.8417C13.3488 21.9918 18.0158 22.1661 18.3044 21.6841C18.3704 21.5743 18.4157 21.3025 18.0507 21.0355C17.6443 20.7388 17.012 20.4971 16.4959 20.3395C17.8745 19.1858 18.5117 17.5879 18.5117 16.3635C18.5117 16.3635 19.8281 18.4779 20.2831 18.4238C20.4949 18.3982 20.7734 17.2657 19.9139 14.529Z"/></svg>'
				},
				link: 'https://qm.qq.com/q/9SrCmseRZC'
			}
		]
	}
})
