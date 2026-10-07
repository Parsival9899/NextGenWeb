import { Code2, Heart } from 'lucide-react';

export default function Footer() {
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
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-[#050510]" />

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
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted technology partner for web development, mobile apps, enterprise solutions, 
              and B2B service partnerships. We turn ideas into digital reality.
            </p>
            <div className="flex gap-3">
              {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <i className={`fab fa-${social} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} NexGen Solutions. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> by NexGen Team
          </p>
        </div>
      </div>
    </footer>
  );
}
