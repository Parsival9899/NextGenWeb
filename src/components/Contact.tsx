import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
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

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] to-[#0d0d2b]" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your project? Contact us and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Email Us</h3>
                <p className="text-gray-400 text-sm mt-1">hello@nexgensolutions.com</p>
                <p className="text-gray-400 text-sm">projects@nexgensolutions.com</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Call Us</h3>
                <p className="text-gray-400 text-sm mt-1">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Visit Us</h3>
                <p className="text-gray-400 text-sm mt-1">123 Tech Park, Innovation Hub</p>
                <p className="text-gray-400 text-sm">Bangalore, India 560001</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Working Hours</h3>
                <p className="text-gray-400 text-sm mt-1">Mon - Fri: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-400 text-sm">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-[#0a0a1a]">Select a service</option>
                    <option value="web" className="bg-[#0a0a1a]">Web Development</option>
                    <option value="mobile" className="bg-[#0a0a1a]">Mobile App Development</option>
                    <option value="enterprise" className="bg-[#0a0a1a]">Enterprise Solution</option>
                    <option value="design" className="bg-[#0a0a1a]">UI/UX Design</option>
                    <option value="b2b" className="bg-[#0a0a1a]">B2B Partnership</option>
                    <option value="outsource" className="bg-[#0a0a1a]">Project Outsourcing</option>
                    <option value="other" className="bg-[#0a0a1a]">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 text-sm mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all text-sm resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
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
