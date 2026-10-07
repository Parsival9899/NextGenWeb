import { CheckCircle2, Users, Target, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    'Full-stack development expertise',
    'Agile methodology & fast delivery',
    'Dedicated project managers',
    '24/7 support & maintenance',
    'Transparent pricing & communication',
    'Scalable & future-proof solutions',
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] to-[#0d0d2b]" />
      
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technology Partner
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We are a service-based IT company that bridges the gap between businesses and technology. 
              Whether you're a startup looking for your first product, an enterprise needing digital transformation, 
              or a company seeking a reliable outsourcing partner — we've got you covered.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our dual model allows us to work directly with clients on their projects while also 
              partnering with other companies to deliver their tech projects as a managed service. 
              This flexibility means we understand both sides of the equation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Client-Focused</h3>
              <p className="text-gray-400 text-xs leading-relaxed">We put your vision first, building solutions that align with your business goals.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Result-Driven</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Every line of code we write is aimed at delivering measurable business outcomes.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">Quality First</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Rigorous testing and code reviews ensure enterprise-grade quality in every project.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">On-Time Delivery</h3>
              <p className="text-gray-400 text-xs leading-relaxed">We respect deadlines and keep you updated throughout the development process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
