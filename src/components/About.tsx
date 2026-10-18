import { CheckCircle2, Users, Target, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const highlights = [
    'Full-stack development expertise',
    'Agile methodology & fast delivery',
    'Dedicated project managers',
    '24/7 support & maintenance',
    'Transparent pricing & communication',
    'Scalable & future-proof solutions',
  ];

  return (
    <section id="about" className={`relative py-24 sm:py-32 ${isLight ? 'bg-white' : 'bg-slate-900'}`}>
      <div className={`absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl ${isLight ? 'bg-purple-200/30' : 'bg-purple-600/10'}`} />
      <div className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl ${isLight ? 'bg-cyan-200/30' : 'bg-cyan-500/10'}`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isLight ? 'bg-cyan-100 text-cyan-700' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
            }`}>
              About Us
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technology Partner
              </span>
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              We are a service-based IT company that bridges the gap between businesses and technology. 
              Whether you're a startup looking for your first product, an enterprise needing digital transformation, 
              or a company seeking a reliable outsourcing partner — we've got you covered.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              Our dual model allows us to work directly with clients on their projects while also 
              partnering with other companies to deliver their tech projects as a managed service. 
              This flexibility means we understand both sides of the equation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
                  <span className={`text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className={`p-5 rounded-2xl transition-all group hover:-translate-y-1 ${isLight ? 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md' : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${isLight ? 'bg-purple-100' : 'bg-purple-500/20'}`}>
                <Users className={`w-5 h-5 ${isLight ? 'text-purple-600' : 'text-purple-400'}`} />
              </div>
              <h3 className={`font-semibold mb-1 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>Client-Focused</h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>We put your vision first, building solutions that align with your business goals.</p>
            </div>
            <div className={`p-5 rounded-2xl transition-all group hover:-translate-y-1 ${isLight ? 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md' : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${isLight ? 'bg-cyan-100' : 'bg-cyan-500/20'}`}>
                <Target className={`w-5 h-5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
              </div>
              <h3 className={`font-semibold mb-1 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>Result-Driven</h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>Every line of code we write is aimed at delivering measurable business outcomes.</p>
            </div>
            <div className={`p-5 rounded-2xl transition-all group hover:-translate-y-1 ${isLight ? 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md' : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${isLight ? 'bg-pink-100' : 'bg-pink-500/20'}`}>
                <Award className={`w-5 h-5 ${isLight ? 'text-pink-600' : 'text-pink-400'}`} />
              </div>
              <h3 className={`font-semibold mb-1 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>Quality First</h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>Rigorous testing and code reviews ensure enterprise-grade quality in every project.</p>
            </div>
            <div className={`p-5 rounded-2xl transition-all group hover:-translate-y-1 ${isLight ? 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md' : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${isLight ? 'bg-amber-100' : 'bg-amber-500/20'}`}>
                <Target className={`w-5 h-5 ${isLight ? 'text-amber-600' : 'text-amber-400'}`} />
              </div>
              <h3 className={`font-semibold mb-1 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>On-Time Delivery</h3>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>We respect deadlines and keep you updated throughout the development process.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
