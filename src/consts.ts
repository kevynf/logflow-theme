// 站点主标题，显示在导航、页面标题与 RSS 信息中。
// 可替换为你的品牌名或站点名。
export const SITE_TITLE = "LogFlow Theme";

// 站点全局描述，用于首页与 SEO 元信息。
// 建议控制在 120~160 字符以内。
export const SITE_DESCRIPTION = "A clean Astro theme for blogging and content publishing.";

// 站点正式 URL，用于 sitemap、RSS 等绝对链接生成。
export const SITE_URL = "https://logflow-theme.vercel.app";

// 页脚版权名称。
// 一般填写个人名、团队名或品牌名。
export const COPYRIGHT_NAME = "LogFlow Theme";

// Header 导航入口配置。
// 新增页面后，需在这里追加对应 href/label 才会显示在导航中。
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/friends", label: "Friends" },
  { href: "/about", label: "About" },
];

// 顶部导航与页脚社交链接。
// icon 可选：social/github、social/twitter、social/bilibili。
export const SOCIAL_LINKS = [
  {
    // 链接显示名称与可访问性文本。
    label: "GitHub",
    // 目标链接地址。
    href: "https://github.com/kevynf/logflow-theme",
    // 对应的内置图标键名。
    icon: "social/github",
  },
  {
    label: "X",
    href: "https://x.com/example",
    icon: "social/twitter",
  },
];

// Friends 页面友链数据。
// avatar 可为空字符串，description 建议一句话简介。
export { FRIEND_LINKS } from "./config/friend-links";

// 首页 GitHub 贡献图配置。
export const GH_CONTRIBUTE = {
  // 区块标题。
  title: "GitHub Contributions",
  // 区块说明文字。
  description: "Recent contribution activity for the selected account.",
  // GitHub 用户名。
  username: "example",
  // 用户主页链接。
  profileUrl: "https://github.com/example",
  // 拉取失败时显示的提示文案。
  errorMessage: "GitHub calendar is temporarily unavailable.",
};

// 首页个人卡片与布局配置。
export const HOME_PROFILE = {
  // 头像链接，支持外链或本地静态资源路径。
  avatarSrc: "https://avatars.githubusercontent.com/u/9919?s=256&v=4",
  // 头像替代文本。
  avatarAlt: "LogFlow Theme Avatar",
  // 主页显示昵称。
  nickname: "LogFlow Theme",
  // 昵称字号，支持 CSS 单位值。
  nicknameFontSize: "2rem",
  // 主页标语文案。
  tagline: "A customizable Astro template for writing and sharing.",
  // 标语字号，支持 CSS 单位值。
  taglineFontSize: "1em",
  // 是否将标语使用斜体样式。
  taglineItalic: false,
  // 首页主内容区左右列宽比例。
  homePostsColumnRatio: "1fr",
  // 标签云区域最小宽度。
  homeTagsMinWidth: "300px",
  // 首页 About 摘要最大截断长度。
  aboutExcerptLength: 180,
  // 首页“近期文章”数量上限。
  recentPostsLimit: 6,
};

// Blog 页面文案配置。
export const BLOG_PAGE = {
  // Blog 主标题。
  title: "Posts",
  // 合集区标题。
  collectionsTitle: "Collections",
  // 标签区标题。
  tagsTitle: "Tags",
};

// 评论系统配置（当前仅支持 giscus）。
export const COMMENTS = {
  // 总开关：false 时不加载评论脚本。
  enabled: true,
  // giscus 核心参数。
  // 参见：https://giscus.app/zh-CN
  repo: "your-username/your-repo-name",
  repoId: "your-repo-id",
  category: "Announcements",
  categoryId: "your-category-id",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "zh-CN",
  loading: "lazy",
};
