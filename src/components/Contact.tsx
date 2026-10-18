import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// ============================================
// 🔧 SETUP INSTRUCTIONS:
// 1. Go to https://web3forms.com
// 2. Enter your email & get your Access Key
// 3. Replace 'YOUR_ACCESS_KEY_HERE' with your key
// ============================================
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: 'NexGen Solutions Website',
          // Form data
          'Client Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Project Type': formData.projectType,
          'Budget Range': formData.budget,
          'Project Details': formData.message,
          // Honeypot for spam protection
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
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

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/25 ${
    isLight 
      ? 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-400' 
      : 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500/50'
  }`;

  const labelClass = `block text-sm mb-2 font-medium ${isLight ? 'text-gray-700' : 'text-gray-300'}`;

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
          {/* Contact Info */}
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

            {/* Quick Info Card */}
            <div className={`p-5 rounded-2xl ${isLight ? 'bg-gradient-to-br from-purple-50 to-cyan-50 border border-purple-100' : 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-white/[0.06]'}`}>
              <h3 className={`font-semibold mb-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>💡 Quick Response</h3>
              <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                We typically respond within 2-4 hours during business hours. For urgent projects, call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className={`p-6 sm:p-8 rounded-2xl ${isLight ? 'bg-white border border-gray-200 shadow-sm' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
              
              {/* Status Messages */}
              {status === 'success' && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${isLight ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'}`}>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Thank you! Your message has been sent. We'll get back to you within 24 hours.</span>
                </div>
              )}

              {status === 'error' && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${isLight ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}>
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{errorMessage || 'Failed to send message. Please try again or email us directly.'}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className={labelClass}>Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
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

              <div className="mb-4">
                <label className={labelClass}>Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" className={isLight ? 'bg-white' : 'bg-slate-900'}>Select budget range</option>
                  <option value="under-5k" className={isLight ? 'bg-white' : 'bg-slate-900'}>Under $5,000</option>
                  <option value="5k-10k" className={isLight ? 'bg-white' : 'bg-slate-900'}>$5,000 - $10,000</option>
                  <option value="10k-25k" className={isLight ? 'bg-white' : 'bg-slate-900'}>$10,000 - $25,000</option>
                  <option value="25k-50k" className={isLight ? 'bg-white' : 'bg-slate-900'}>$25,000 - $50,000</option>
                  <option value="50k-plus" className={isLight ? 'bg-white' : 'bg-slate-900'}>$50,000+</option>
                  <option value="not-sure" className={isLight ? 'bg-white' : 'bg-slate-900'}>Not sure yet</option>
                </select>
              </div>

              <div className="mb-6">
                <label className={labelClass}>Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              {/* Honeypot field for spam protection (hidden) */}
              <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className={`text-xs text-center mt-4 ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
