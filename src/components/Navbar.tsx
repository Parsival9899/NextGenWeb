import { useState } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-6xl`}>
      <div
        className={`
          relative rounded-full
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-lg shadow-black/20
          px-6 py-3
          transition-all duration-300
          ${scrollY > 50 ? 'bg-white/10 shadow-xl' : ''}
        `}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hidden sm:block">
              NexGen
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
            >
              Get Started
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold mt-3 text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
