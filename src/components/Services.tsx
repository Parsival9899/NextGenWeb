import { Globe, Smartphone, Server, Palette, Shield, Zap, Building2, Users } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites, web apps, and e-commerce solutions built with modern technologies for performance and scalability.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Server,
    title: 'Enterprise Solutions',
    description: 'Robust enterprise software, ERP systems, and custom business applications tailored to your operations.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user psychology in mind to maximize engagement and conversions.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Cloud & Security',
    description: 'Secure cloud infrastructure, DevOps automation, and cybersecurity solutions to protect your digital assets.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless third-party API integrations, payment gateways, and data synchronization across platforms.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Building2,
    title: 'B2B Service Partnerships',
    description: 'We partner with companies to handle their tech projects as a dedicated service provider — white-label or co-branded.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Users,
    title: 'Project Outsourcing',
    description: 'Take projects from other companies and deliver them as a managed service — we handle everything from start to finish.',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide comprehensive technology solutions for businesses of all sizes — 
            from direct client projects to B2B service partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
