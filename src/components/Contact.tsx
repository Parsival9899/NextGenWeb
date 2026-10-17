import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Us', lines: ['hello@nexgensolutions.com', 'projects@nexgensolutions.com'], color: 'purple' },
    { icon: Phone, title: 'Call Us', lines: ['+1 (555) 123-4567', '+91 98765 43210'], color: 'cyan' },
    { icon: MapPin, title: 'Visit Us', lines: ['123 Tech Park, Innovation Hub', 'Bangalore, India 560001'], color: 'pink' },
    { icon: Clock, title: 'Working Hours', lines: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 10:00 AM - 4:00 PM'], color: 'amber' },
  ];

  const colorClasses = {
    purple: { bg: isLight ? 'bg-purple-100' : 'bg-purple-500/20', text: isLight ? 'text-purple-600' : 'text-purple-400' },
    cyan: { bg: isLight ? 'bg-cyan-100' : 'bg-cyan-500/20', text: isLight ? 'text-cyan-600' : 'text-cyan-400' },
    pink: { bg: isLight ? 'bg-pink-100' : 'bg-pink-500/20', text: isLight ? 'text-pink-600' : 'text-pink-400' },
    amber: { bg: isLight ? 'bg-amber-100' : 'bg-amber-500/20', text: isLight ? 'text-amber-600' : 'text-amber-400' },
  };

  return (
    <section id="contact" className={`relative py-24 sm:py-32 ${isLight ? 'bg-gray-50' : 'bg-slate-900'}`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${isLight ? 'bg-purple-100/50' : 'bg-purple-600/5'}`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${isLight ? 'bg-purple-100 text-purple-700' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
            Get In Touch
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            Ready to start your project? Contact us and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className={`p-5 rounded-2xl flex items-start gap-4 ${isLight ? 'bg-white border border-gray-200' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[info.color as keyof typeof colorClasses].bg}`}>
                  <info.icon className={`w-5 h-5 ${colorClasses[info.color as keyof typeof colorClasses].text}`} />
                </div>
                <div>
                  <h3 className={`font-medium text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className={`text-sm mt-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className={`p-6 sm:p-8 rounded-2xl ${isLight ? 'bg-white border border-gray-200' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
              {submitted && (
                <div className={`mb-6 p-4 rounded-xl text-sm text-center ${isLight ? 'bg-emerald-100 border border-emerald-200 text-emerald-700' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'}`}>
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm mb-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/25 ${isLight ? 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400' : 'bg-white/5 border border-white/10 text-white placeholder-gray-500'}`} placeholder="John Doe" />
                </div>
                <div>
                  <label className={`block text-sm mb-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/25 ${isLight ? 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400' : 'bg-white/5 border border-white/10 text-white placeholder-gray-500'}`} placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-sm mb-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/25 ${isLight ? 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400' : 'bg-white/5 border border-white/10 text-white placeholder-gray-500'}`} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className={`block text-sm mb-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Project Type</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} required className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/25 appearance-none ${isLight ? 'bg-gray-50 border border-gray-200 text-gray-900' : 'bg-white/5 border border-white/10 text-white'}`}>
                    <option value="" className={isLight ? 'bg-white' : 'bg-slate-900'}>Select a service</option>
                    <option value="web" className={isLight ? 'bg-white' : 'bg-slate-900'}>Web Development</option>
                    <option value="mobile" className={isLight ? 'bg-white' : 'bg-slate-900'}>Mobile App Development</option>
                    <option value="enterprise" className={isLight ? 'bg-white' : 'bg-slate-900'}>Enterprise Solution</option>
                    <option value="design" className={isLight ? 'bg-white' : 'bg-slate-900'}>UI/UX Design</option>
                    <option value="b2b" className={isLight ? 'bg-white' : 'bg-slate-900'}>B2B Partnership</option>
                    <option value="outsource" className={isLight ? 'bg-white' : 'bg-slate-900'}>Project Outsourcing</option>
                    <option value="other" className={isLight ? 'bg-white' : 'bg-slate-900'}>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className={`block text-sm mb-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/25 resize-none ${isLight ? 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400' : 'bg-white/5 border border-white/10 text-white placeholder-gray-500'}`} placeholder="Tell us about your project, goals, and timeline..." />
              </div>

              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
