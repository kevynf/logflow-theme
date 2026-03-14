// 站点主标题，显示在导航、页面标题与 RSS 信息中。
// 可替换为你的品牌名或站点名。
export const SITE_TITLE = 'LogFlow Theme';

// 站点全局描述，用于首页与 SEO 元信息。
// 建议控制在 120~160 字符以内。
export const SITE_DESCRIPTION = 'A clean Astro theme for blogging and content publishing.';

// 页脚版权名称。
// 一般填写个人名、团队名或品牌名。
export const COPYRIGHT_NAME = 'LogFlow Theme';

// 顶部导航与页脚社交链接。
// icon 可选：social/github、social/twitter、social/bilibili。
export const SOCIAL_LINKS = [
	{
		// 链接显示名称与可访问性文本。
		label: 'GitHub',
		// 目标链接地址。
		href: 'https://github.com/kevynf/logflow-theme',
		// 对应的内置图标键名。
		icon: 'social/github',
	},
	{
		label: 'X',
		href: 'https://x.com/example',
		icon: 'social/twitter',
	},
];

// Friends 页面友链数据。
// avatar 可为空字符串，description 建议一句话简介。
export const FRIEND_LINKS = [
	{
		name: 'Astro',
		url: 'https://astro.build/',
		avatar: 'https://astro.build/favicon.svg',
		description: '现代静态站点框架，内容驱动体验非常优秀。',
	},
	{
		name: 'Vercel',
		url: 'https://vercel.com/',
		avatar: 'https://vercel.com/favicon.ico',
		description: '前端部署平台，适合快速发布与持续迭代。',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/',
		avatar: 'https://github.githubassets.com/favicons/favicon.svg',
		description: '开源协作平台，代码托管与协同开发基础设施。',
	},
];

// 首页 GitHub 贡献图配置。
export const GH_CONTRIBUTE = {
	// 区块标题。
	title: 'GitHub Contributions',
	// 区块说明文字。
	description: 'Recent contribution activity for the selected account.',
	// GitHub 用户名。
	username: 'kevynf',
	// 用户主页链接。
	profileUrl: 'https://github.com/kevynf',
	// 拉取失败时显示的提示文案。
	errorMessage: 'GitHub calendar is temporarily unavailable.',
};

// 首页个人卡片与布局配置。
export const HOME_PROFILE = {
	// 头像链接，支持外链或本地静态资源路径。
	avatarSrc: 'https://avatars.githubusercontent.com/u/9919?s=256&v=4',
	// 头像替代文本。
	avatarAlt: 'LogFlow Theme Avatar',
	// 主页显示昵称。
	nickname: 'LogFlow Theme',
	// 昵称字号，支持 CSS 单位值。
	nicknameFontSize: '2rem',
	// 主页标语文案。
	tagline: 'A customizable Astro template for writing and sharing.',
	// 标语字号，支持 CSS 单位值。
	taglineFontSize: '1em',
	// 是否将标语使用斜体样式。
	taglineItalic: false,
	// 首页主内容区左右列宽比例。
	homePostsColumnRatio: '1fr',
	// 标签云区域最小宽度。
	homeTagsMinWidth: '300px',
	// 首页 About 摘要最大截断长度。
	aboutExcerptLength: 180,
	// 首页“近期文章”数量上限。
	recentPostsLimit: 6,
};

// Blog 页面文案配置。
export const BLOG_PAGE = {
	// Blog 主标题。
	title: 'Posts',
	// 合集区标题。
	collectionsTitle: 'Collections',
	// 标签区标题。
	tagsTitle: 'Tags',
};

// 评论系统配置（当前仅支持 giscus）。
export const COMMENTS = {
	// 总开关：false 时不加载评论脚本。
	enabled: false,
	// 评论提供方，当前保持 giscus。
	provider: 'giscus',
	// GitHub 仓库，格式 owner/repo。
	repo: '',
	// Giscus 提供的仓库 ID。
	repoId: '',
	// Discussion 分类名称。
	category: 'Announcements',
	// Giscus 提供的分类 ID。
	categoryId: '',
	// 讨论映射方式，常用 pathname / title / url / og:title。
	mapping: 'pathname',
	// 浅色模式主题名。
	themeLight: 'light',
	// 深色模式主题名。
	themeDark: 'dark',
	// 评论区语言。
	lang: 'zh-CN',
};
