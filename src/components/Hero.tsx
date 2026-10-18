import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.vx + 100) % 100,
          y: (p.y + p.vy + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${isLight ? 'bg-gray-50' : 'bg-slate-900'}`}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-orb-1 ${isLight ? 'bg-purple-300/30' : 'bg-purple-600/30'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-orb-2 ${isLight ? 'bg-cyan-300/30' : 'bg-cyan-500/30'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl animate-orb-3 ${isLight ? 'bg-indigo-200/40' : 'bg-indigo-600/20'}`} />
        <div className={`absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl animate-orb-4 ${isLight ? 'bg-pink-200/30' : 'bg-pink-500/20'}`} />

        <div className={`absolute inset-0 bg-[size:60px_60px] animate-grid-pulse ${
          isLight 
            ? 'bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)]'
        }`} />

        <svg className="absolute inset-0 w-full h-full opacity-40">
          {particles.map((particle, i) => (
            <g key={particle.id}>
              <circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r={particle.size}
                fill="url(#particleGradient)"
                className="animate-particle"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
              {i < particles.length - 1 && (
                <line
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${particles[i + 1].x}%`}
                  y2={`${particles[i + 1].y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              )}
            </g>
          ))}
          <defs>
            <radialGradient id="particleGradient">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <div className={`absolute top-20 left-10 animate-float-1 ${isLight ? 'text-purple-300' : 'text-purple-400/20'}`}>
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        <div className={`absolute top-40 right-20 animate-float-2 ${isLight ? 'text-cyan-300' : 'text-cyan-400/20'}`}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          </svg>
        </div>
        <div className={`absolute bottom-40 left-20 animate-float-3 ${isLight ? 'text-pink-300' : 'text-pink-400/20'}`}>
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>
        <div className={`absolute bottom-20 right-10 animate-float-4 ${isLight ? 'text-emerald-300' : 'text-emerald-400/20'}`}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
          </svg>
        </div>

        <div className={`absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-2xl animate-glow-1 ${isLight ? 'opacity-20' : 'opacity-30'}`} />
        <div className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full blur-2xl animate-glow-2 ${isLight ? 'opacity-20' : 'opacity-30'}`} />
        <div className={`absolute top-1/2 right-1/2 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl animate-glow-3 ${isLight ? 'opacity-20' : 'opacity-30'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
          We Build{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
            Digital Solutions
          </span>
          <br />
          That Drive Growth
        </h1>

        <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
          From custom websites and mobile apps to enterprise software and B2B service partnerships — 
          we deliver end-to-end technology solutions that help businesses scale and succeed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all ${
              isLight 
                ? 'border-2 border-gray-300 text-gray-900 hover:bg-gray-100 hover:border-gray-400'
                : 'border border-white/20 text-white hover:bg-white/5 hover:border-white/40'
            }`}
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Happy Clients' },
            { number: '30+', label: 'Team Members' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className={`text-sm mt-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${isLight ? 'border-gray-400' : 'border-white/20'}`}>
          <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
