import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    content: 'NexGen delivered our e-commerce platform ahead of schedule. Their team understood our vision perfectly and built something even better than we imagined. Highly recommended!',
    rating: 5,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CTO, HealthPlus',
    content: 'We partnered with NexGen for our healthcare app development. Their expertise in mobile development and attention to security compliance was outstanding. A truly professional team.',
    rating: 5,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Amit Patel',
    role: 'Director, LogiTrans Solutions',
    content: 'As a company that outsources tech projects, finding NexGen was a game-changer. They handle everything seamlessly as our white-label partner. Our clients love the results.',
    rating: 5,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, EduLearn',
    content: 'The EdTech platform NexGen built for us has transformed how we deliver education. The UI is beautiful, performance is excellent, and the support team is always responsive.',
    rating: 5,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'David Chen',
    role: 'VP Engineering, FinServ Corp',
    content: 'NexGen took on our complex fintech dashboard project and delivered exceptional results. Their technical depth and project management skills are top-notch.',
    rating: 5,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Neha Gupta',
    role: 'Product Manager, RealtyHub',
    content: 'Working with NexGen felt like having an in-house team. They were communicative, flexible with changes, and delivered a product that our users absolutely love.',
    rating: 5,
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a]" />
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-purple-500/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
