export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  imageUrl: string
}

const ASSET_BASE_URL = `${import.meta.env.BASE_URL}assets/images/`

export const projects: ProjectItem[] = [
  {
    title: 'Discord Music Stream Bot',
    description: 'A Discord bot that streams music from Youtube, providing a seamless audio experience for server members. YouTube API integration for title searches.',
    tags: ['Node.js', 'Discord.js', 'API Integration'],
    githubUrl: 'https://github.com/Lalord22/Lilquil2',
    imageUrl: `${ASSET_BASE_URL}project1.png`,
  },
  {
    title: 'Apple-like webpage',
    description: 'A modular component showcase with reusable layouts and accessible interaction patterns.',
    tags: ['React', 'GSAP', '3D models'],
    githubUrl: 'https://lalord22.github.io/Apple-Website-Demo/',
    imageUrl: `${ASSET_BASE_URL}project2.png`,
  },
  {
    title: 'Modern UI/UX website',
    description: 'An editorial scrolling experience combining animated sections and structured project storytelling.',
    tags: ['Tailwind CSS', 'Motion Effects', 'Vite'],
    githubUrl: 'https://github.com/Lalord22/scroll-story',
    imageUrl: `${ASSET_BASE_URL}project3.png`,
  },
  {
    title: 'Tamper monkey automation bot',
    description: 'A Tampermonkey script that automates repetitive zip code insertion on work pages, enhancing productivity and user experience. Tracks fails.\nauto saves\n.Logs usage to a google forms.',
    tags: ['JavaScript', 'Tampermonkey', 'Automation'],
    githubUrl: 'https://github.com/Lalord22/zip-codes-tamper-monkey',
    imageUrl: `${ASSET_BASE_URL}project4.png`,
  },
]
