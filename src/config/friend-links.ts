export interface FriendLink {
  name: string;
  link?: string;
  url?: string;
  avatar?: string;
  desc?: string;
  description?: string;
}

export const FRIEND_LINKS: FriendLink[] = [
  {
    name: "Astro",
    link: "https://astro.build/",
    avatar: "https://astro.build/favicon.svg",
    desc: "Modern static site framework, content-driven experiences are excellent.",
  },
  {
    name: "Vercel",
    link: "https://vercel.com/",
    avatar: "https://vercel.com/favicon.ico",
    desc: "Frontend deployment platform, suitable for rapid release and iteration.",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    avatar: "https://github.githubassets.com/favicons/favicon.svg",
    desc: "Open source collaboration platform, code hosting and collaborative development infrastructure.",
  },
];
