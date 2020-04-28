module.exports = {
	title: '前端全栈之路',
	base: process.env.NOW_DEPLOY ? '/' : '/fucking-front-end/',
	head: [
		[
			'meta',
			{
				name: 'keywords',
				content:
					'front-end, vue, micro frontend, micro frontends, micro-frontend, micro-frontends, microservice, javascript',
			},
		],
		[
			// baidu analytics
			'script',
			{},
			`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?0f738d9b0ac90574c09183ea85bcfa2e";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `
		],
	],
	themeConfig: {
		repo: 'taosin/fucking-front-end',
		lastUpdated: 'Last Updated',
		editLinks: true,
		docsDir: 'docs',
		smoothScroll: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				editLinkText: 'Edit this page on GitHub',
				nav: [
					{ text: 'Guide', link: '/guide/' },
					{ text: 'API', link: '/api/' },
					{ text: 'Changelog', link: 'https://github.com/umijs/qiankun/releases' },
				],
				sidebar: {
					'/guide/': [
						{
							title: 'Guide',
							collapsable: false,
							children: ['', 'getting-started'],
						},
					],
				},
			}
		},
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-157295698-1',
			},
		],
		[
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true,
			},
		],
	],
};
