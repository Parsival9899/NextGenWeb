import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery & Planning',
    description: 'We dive deep into understanding your business, target audience, and goals. We map out the project scope, define milestones, and create a detailed roadmap with clear timelines and deliverables.',
    highlights: ['Requirement Analysis', 'Tech Stack Selection', 'Timeline & Budget'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Design & Architecture',
    description: 'Our design team creates stunning wireframes and interactive prototypes. Simultaneously, our architects plan a scalable technical foundation that ensures performance, security, and future growth.',
    highlights: ['UI/UX Wireframes', 'System Architecture', 'Interactive Prototypes'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Development & Testing',
    description: 'Using agile methodology, we build your product in focused sprints with regular demos. Every feature undergoes rigorous testing — unit, integration, and user acceptance — to ensure flawless quality.',
    highlights: ['Agile Sprints', 'Code Reviews', 'QA & Testing'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Deploy',
    description: 'We handle the complete deployment process — from server configuration to domain setup. We ensure a smooth, zero-downtime launch with performance optimization and security hardening.',
    highlights: ['Zero-Downtime Deploy', 'Performance Tuning', 'Security Audit'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: CheckCircle,
    step: '05',
    title: 'Support & Growth',
    description: 'Our partnership doesn\'t end at launch. We provide ongoing maintenance, monitoring, and continuous improvements. We scale your product as your business grows and add new features as needed.',
    highlights: ['24/7 Monitoring', 'Bug Fixes & Updates', 'Feature Scaling'],
    color: 'from-emerald-500 to-teal-500',
  },
];

function StepVisual({ stepIndex, color }: { stepIndex: number; color: string }) {
  switch (stepIndex) {
    case 0:
      return (
        <div className={`relative w-full max-w-sm p-6 rounded-3xl bg-gradient-to-br ${color} bg-opacity-5 border border-white/10`}>
          <div className="aspect-[4/3] flex items-center justify-center relative">
            <div className="w-48 h-56 bg-slate-800/80 rounded-2xl border border-white/10 p-4 shadow-2xl relative">
              <div className="w-16 h-3 bg-white/20 rounded-full mb-4 mx-auto" />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-purple-500/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm" />
                  </div>
                  <div className="flex-1 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-purple-500/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-sm" />
                  </div>
                  <div className="flex-1 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-white/10" />
                  <div className="flex-1 h-2 bg-white/5 rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-10 blur-3xl -z-10`} />
        </div>
      );
    case 1:
      return (
        <div className={`relative w-full max-w-sm p-6 rounded-3xl bg-gradient-to-br ${color} bg-opacity-5 border border-white/10`}>
          <div className="aspect-[4/3] flex items-center justify-center relative">
            <div className="w-56 h-44 bg-slate-800/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="h-6 bg-slate-700/80 flex items-center gap-1.5 px-3">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
              </div>
              <div className="p-3 space-y-2">
                <div className="h-8 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg" />
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-12 bg-white/5 rounded" />
                  <div className="h-12 bg-white/5 rounded" />
                  <div className="h-12 bg-white/5 rounded" />
                </div>
              </div>
            </div>
            <div className="absolute top-2 left-6 w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s' }}>
              <Lightbulb className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-10 blur-3xl -z-10`} />
        </div>
      );
    case 2:
      return (
        <div className={`relative w-full max-w-sm p-6 rounded-3xl bg-gradient-to-br ${color} bg-opacity-5 border border-white/10`}>
          <div className="aspect-[4/3] flex items-center justify-center relative">
            <div className="w-56 h-44 bg-slate-800/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="h-6 bg-slate-700/80 flex items-center gap-2 px-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>
              </div>
              <div className="p-3 font-mono text-[7px] leading-relaxed">
                <div><span className="text-pink-400">const</span> <span className="text-cyan-400">App</span> = () =&gt; {'{'}</div>
                <div className="pl-3"><span className="text-pink-400">return</span> (</div>
                <div className="pl-6"><span className="text-amber-400">&lt;div&gt;</span></div>
                <div className="pl-9"><span className="text-emerald-400">Hello World</span></div>
                <div className="pl-6"><span className="text-amber-400">&lt;/div&gt;</span></div>
                <div className="pl-3">)</div>
                <div>{'}'}</div>
              </div>
            </div>
            <div className="absolute top-4 right-6 w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
              <Code2 className="w-6 h-6 text-pink-400" />
            </div>
          </div>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-10 blur-3xl -z-10`} />
        </div>
      );
    case 3:
      return (
        <div className={`relative w-full max-w-sm p-6 rounded-3xl bg-gradient-to-br ${color} bg-opacity-5 border border-white/10`}>
          <div className="aspect-[4/3] flex items-center justify-center relative">
            <div className="w-56 h-44 bg-slate-800/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="h-6 bg-slate-700/80 flex items-center px-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex items-end gap-1.5 h-16 pt-2">
                  <div className="flex-1 bg-gradient-to-t from-amber-500/60 to-orange-400/60 rounded-t h-[40%]" />
                  <div className="flex-1 bg-gradient-to-t from-amber-500/60 to-orange-400/60 rounded-t h-[65%]" />
                  <div className="flex-1 bg-gradient-to-t from-amber-500/60 to-orange-400/60 rounded-t h-[80%]" />
                  <div className="flex-1 bg-gradient-to-t from-amber-500/60 to-orange-400/60 rounded-t h-[60%]" />
                  <div className="flex-1 bg-gradient-to-t from-amber-500/60 to-orange-400/60 rounded-t h-[90%]" />
                  <div className="flex-1 bg-gradient-to-t from-amber-500/60 to-orange-400/60 rounded-t h-[100%]" />
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-6 w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s' }}>
              <Rocket className="w-6 h-6 text-amber-400" />
            </div>
          </div>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-10 blur-3xl -z-10`} />
        </div>
      );
    case 4:
      return (
        <div className={`relative w-full max-w-sm p-6 rounded-3xl bg-gradient-to-br ${color} bg-opacity-5 border border-white/10`}>
          <div className="aspect-[4/3] flex items-center justify-center relative">
            <div className="w-56 h-44 bg-slate-800/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="h-6 bg-slate-700/80 flex items-center px-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>
              </div>
              <div className="p-3 space-y-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  </div>
                  <div className="h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                  <div className="h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-6 w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-10 blur-3xl -z-10`} />
        </div>
      );
    default:
      return null;
  }
}

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d2b] via-[#0a0a1a] to-[#0d0d2b]" />

      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven methodology that ensures every project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-purple-500/40 via-cyan-500/40 to-emerald-500/40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-purple-500 to-transparent animate-pulse rounded-full blur-sm" />
          </div>

          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-purple-500/40 via-cyan-500/40 to-emerald-500/40" />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:py-10 lg:items-center">
                  <div className="hidden lg:flex absolute left-1/2 top-16 -translate-x-1/2 z-20">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-30 blur-xl`} />
                  </div>

                  <div className={`lg:py-4 ${isEven ? 'lg:col-start-1 lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="lg:hidden flex items-start gap-6">
                      <div className="flex-shrink-0 relative">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} opacity-30 blur-md`} />
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="mb-2">
                          <span className="text-xs font-bold text-gray-500 uppercase">Step {step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:flex h-full items-center">
                      <div className="w-full group">
                        <div className="mb-3">
                          <span className={`text-xs font-bold text-gray-500 uppercase ${isEven ? 'float-right' : ''}`}>Step {step.step}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-5">{step.description}</p>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          {step.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden lg:flex items-center justify-center lg:py-4 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="w-full flex justify-center">
                      <StepVisual stepIndex={index} color={step.color} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/10">
            <span className="text-gray-300 text-sm">Ready to start your journey?</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
