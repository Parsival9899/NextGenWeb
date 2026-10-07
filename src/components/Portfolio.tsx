import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online store with payment integration, inventory management, and analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Development',
    description: 'Patient management app with appointment scheduling, telemedicine, and health tracking features.',
    tags: ['React Native', 'Firebase', 'AWS'],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'FinTech Dashboard',
    category: 'Enterprise Solution',
    description: 'Real-time financial analytics platform with data visualization, reporting, and compliance tools.',
    tags: ['Vue.js', 'Python', 'PostgreSQL'],
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    title: 'Logistics System',
    category: 'B2B Partnership',
    description: 'End-to-end logistics management system built as a white-label solution for a transportation company.',
    tags: ['Angular', '.NET', 'Azure'],
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'EdTech Platform',
    category: 'Web Application',
    description: 'Online learning management system with video streaming, quizzes, and progress tracking.',
    tags: ['Next.js', 'GraphQL', 'Stripe'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Real Estate Portal',
    category: 'Full-Stack Project',
    description: 'Property listing platform with virtual tours, mortgage calculator, and agent management system.',
    tags: ['React', 'Django', 'Redis'],
    gradient: 'from-violet-600 to-purple-600',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d2b] to-[#0a0a1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our recent work — from direct client projects to B2B service deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
