import { Code2, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Enterprise Solutions', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'B2B Partnerships', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#process' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className={`relative border-t ${isLight ? 'border-gray-200 bg-gray-100' : 'border-white/5 bg-slate-950'}`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                NexGen Solutions
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-6 max-w-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              Your trusted technology partner for web development, mobile apps, enterprise solutions, 
              and B2B service partnerships. We turn ideas into digital reality.
            </p>
            <div className="flex gap-3">
              {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    isLight ? 'bg-white border border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-300' : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <i className={`fab fa-${social} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-purple-600' : 'text-gray-400 hover:text-white'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-purple-600' : 'text-gray-400 hover:text-white'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-purple-600' : 'text-gray-400 hover:text-white'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isLight ? 'border-gray-200' : 'border-white/5'}`}>
          <p className={`text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
            © {currentYear} NexGen Solutions. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-1 ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> by NexGen Team
          </p>
        </div>
      </div>
    </footer>
  );
}
