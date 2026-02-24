const projects = [
  {
    id: 1,
    title: "Deadman's Hand",
    description: "A simulation game educating players on manipulative, gambling-like tactics used by game companies — gacha mechanics, currency manipulation, artificial scarcity, and more.",
    tags: ["React", "Next.js", "Node.js", "Firebase", "Figma"],
    image: "/images/deadman-preview.svg",
    year: "2025",
    category: "Game / Education",
    githubUrl: "https://github.com/CatherineRodriquez04/BRIDGE",
    liveUrl: "https://bridge-lac.vercel.app/",
  },
  {
    id: 2,
    title: "CSS Style Guide",
    description: "My personal component library, notes, resources, and dev techniques — including an interactive component creation game and useful developer tools.",
    tags: ["React", "Tailwind CSS", "CSS", "Bootstrap"],
    image: "/images/csg-preview.svg",
    year: "2025",
    category: "Developer Tool",
    githubUrl: "https://github.com/Haze-7/css-style-guide",
    liveUrl: "https://css-style-guide.vercel.app/",
  },
  {
    id: 3,
    title: "Suni: The Travel Companion",
    description: "Suni Algorithm for planning travel and iteneraries. Plan your next vacation today!",
    tags: ["React", "Django", "OpenWeather API"],
    image: "/images/suni-preview.svg",
    year: "2026",
    category: "Web App",
    githubUrl: "https://github.com/Haze-7",
    liveUrl: "https://github.com/Haze-7",
  },
  {
    id: 4,
    title: "OrchestrAI",
    description: "AI Orchestrator model that organizes, interacts with, and automatically connects users to vendors. Integrated GUI for adding new vendors, making project scalable for future acquisitions/partners. Integrated seamlessly into Microsoft Teams application with adaptive cards & API routing.",
    tags: ["React", "Firebase", "DnD Kit"],
    image: "/images/orchestrai.svg",
    year: "2025",
    category: "AI Connectivity",
    githubUrl: "https://github.com/Haze-7",
    liveUrl: "https://github.com/Haze-7",
  },
  {
    id: 5,
    title: "SoundSpace",
    description: "Music discovery platform that generates personalized playlists based on listening habits and mood analysis.",
    tags: ["React", "Spotify API", "Tailwind CSS"],
    image: "/images/project-5.jpg",
    year: "2024",
    category: "Creative",
    githubUrl: "https://github.com/Haze-7",
    liveUrl: "https://github.com/Haze-7",
  }
];

function Card({ project }) {
  return (
    <div className="projects-card-container hover:shadow-xl group">
      {/* Image Container */}
      <div className="projects-card-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="projects-card-image transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Image overlay */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="projects-card-image-overlay-badge rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur-sm">
            {project.category}
          </span>
          <span className="projects-card-image-overlay-badge rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>
      {/* Card Content Container */}
      <div className="projects-card-content-container gradient-bg">
        <h3 className="text-lg font-semibold text-foreground ">{project.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="projects-card-task">
              {tag}
            </span>
          ))}
        </div>
        {/* Button Section */}
        <div className="flex gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            id="projects-primary-button"
            className="projects-card-button text-sm font-medium hover:opacity-90">
            <GithubIcon /> GitHub
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            id="projects-secondary-button"
            className="projects-card-button border text-sm font-medium hover:opacity-90">
            <ExternalLinkIcon /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export function BentoProjects() {
  const [p1, p2, p3, p4, p5, p6] = projects;

  return (
    <section id="Projects" className="md:py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Desktop grid — edit gridColumn/gridRow to rearrange cards */}          
        <div className="hidden md:grid grid-cols-3 gap-5" style={{ gridTemplateRows: "420px 420px" }}> {/* Add another 420px after to add 3rd row */} 
          <div style={{ gridColumn: "1 / 3", gridRow: "1" }}><Card project={p1} /></div>
          <div style={{ gridColumn: "3",     gridRow: "1" }}><Card project={p2} /></div>
          <div style={{ gridColumn: "1",     gridRow: "2" }}><Card project={p4} /></div>
          {/* <div style={{ gridColumn: "2 ",     gridRow: "2" }}><Card project={p5} /></div> */}
          <div style={{ gridColumn: "2 / 4",     gridRow: "2" }}><Card project={p3} /></div>
          {/* <div style={{ gridColumn: "1 / 4", gridRow: "3" }}><Card project={p6} /></div> */}

        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-5 md:hidden">
          {projects.map((p) => (
            <div key={p.id} className="h-96"><Card project={p} /></div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <a href="/UnderConstruction"
            className="flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background hover:opacity-90">
            View More <ExternalLinkIcon />
          </a>
          <a href="https://github.com/Haze-7" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
            <GithubIcon /> GitHub Home
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default BentoProjects;