import { Check, X, ArrowRight, Star, Zap, Crown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const pricingPlans = [
  // Web Development
  {
    category: 'Web Development',
    icon: '🌐',
    plans: [
      {
        name: 'Basic Website',
        price: '₹25,000',
        duration: 'starting from',
        description: 'Perfect for small businesses & startups',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Basic SEO setup',
          'Contact form',
          'Social media integration',
          '1 month free support',
        ],
        notIncluded: ['E-commerce features', 'Custom animations', 'CMS integration'],
        popular: false,
        tier: 'basic',
      },
      {
        name: 'Business Website',
        price: '₹75,000',
        duration: 'starting from',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 15 pages',
          'Advanced responsive design',
          'Complete SEO optimization',
          'Blog integration',
          'Newsletter signup',
          'Google Analytics',
          'CMS (WordPress/Custom)',
          '3 months free support',
        ],
        notIncluded: ['E-commerce', 'Custom web app'],
        popular: true,
        tier: 'standard',
      },
      {
        name: 'E-Commerce Store',
        price: '₹1,50,000',
        duration: 'starting from',
        description: 'Full-featured online store',
        features: [
          'Unlimited products',
          'Payment gateway integration',
          'Inventory management',
          'Order tracking system',
          'Customer accounts',
          'Advanced SEO',
          'Email marketing integration',
          '6 months free support',
        ],
        notIncluded: [],
        popular: false,
        tier: 'premium',
      },
    ],
  },
  // Mobile App Development
  {
    category: 'Mobile App Development',
    icon: '📱',
    plans: [
      {
        name: 'Basic App',
        price: '₹2,00,000',
        duration: 'starting from',
        description: 'Simple utility or content app',
        features: [
          'Single platform (iOS or Android)',
          'Up to 10 screens',
          'Basic UI/UX design',
          'Push notifications',
          'API integration',
          'App store submission',
          '2 months free support',
        ],
        notIncluded: ['Cross-platform', 'Complex features'],
        popular: false,
        tier: 'basic',
      },
      {
        name: 'Business App',
        price: '₹5,00,000',
        duration: 'starting from',
        description: 'Feature-rich business application',
        features: [
          'Cross-platform (iOS & Android)',
          'Up to 25 screens',
          'Custom UI/UX design',
          'User authentication',
          'Payment integration',
          'Admin dashboard',
          'Push notifications',
          'Analytics integration',
          '4 months free support',
        ],
        notIncluded: [],
        popular: true,
        tier: 'standard',
      },
      {
        name: 'Enterprise App',
        price: '₹10,00,000',
        duration: 'starting from',
        description: 'Complex enterprise solution',
        features: [
          'Cross-platform development',
          'Unlimited screens',
          'Premium UI/UX design',
          'Advanced features (AR/VR, AI)',
          'Real-time data sync',
          'Multi-language support',
          'Advanced security',
          'Scalable architecture',
          '6 months free support',
        ],
        notIncluded: [],
        popular: false,
        tier: 'premium',
      },
    ],
  },
  // UI/UX Design
  {
    category: 'UI/UX Design',
    icon: '🎨',
    plans: [
      {
        name: 'Basic Design',
        price: '₹40,000',
        duration: 'starting from',
        description: 'Logo & basic branding',
        features: [
          'Logo design (3 concepts)',
          'Business card design',
          'Color palette',
          'Typography selection',
          'Brand guidelines (basic)',
          '2 revision rounds',
        ],
        notIncluded: ['Website design', 'App design'],
        popular: false,
        tier: 'basic',
      },
      {
        name: 'Complete Branding',
        price: '₹1,00,000',
        duration: 'starting from',
        description: 'Full brand identity package',
        features: [
          'Complete logo suite',
          'Brand guidelines document',
          'Stationery design',
          'Social media kit',
          'Website UI design (up to 10 pages)',
          'Mobile responsive design',
          '5 revision rounds',
        ],
        notIncluded: ['App UI design'],
        popular: true,
        tier: 'standard',
      },
      {
        name: 'Premium Design',
        price: '₹2,00,000',
        duration: 'starting from',
        description: 'Complete digital presence design',
        features: [
          'Everything in Complete Branding',
          'Mobile app UI design',
          'Interactive prototypes',
          'User flow diagrams',
          'Design system creation',
          'Unlimited revisions',
          'Source files included',
        ],
        notIncluded: [],
        popular: false,
        tier: 'premium',
      },
    ],
  },
  // Custom Web Applications
  {
    category: 'Custom Web Applications',
    icon: '⚙️',
    plans: [
      {
        name: 'MVP Application',
        price: '₹3,00,000',
        duration: 'starting from',
        description: 'Minimum viable product',
        features: [
          'Core features implementation',
          'User authentication',
          'Basic admin panel',
          'Database setup',
          'API development',
          'Responsive design',
          '3 months free support',
        ],
        notIncluded: ['Advanced features', 'Mobile app'],
        popular: false,
        tier: 'basic',
      },
      {
        name: 'Business Application',
        price: '₹7,50,000',
        duration: 'starting from',
        description: 'Full-featured business solution',
        features: [
          'Complete feature set',
          'Advanced admin dashboard',
          'Payment integration',
          'Email/SMS notifications',
          'Analytics & reporting',
          'Third-party integrations',
          'Performance optimization',
          '6 months free support',
        ],
        notIncluded: [],
        popular: true,
        tier: 'standard',
      },
      {
        name: 'Enterprise Solution',
        price: '₹15,00,000',
        duration: 'starting from',
        description: 'Large-scale enterprise platform',
        features: [
          'Custom architecture',
          'Microservices setup',
          'Advanced security',
          'Multi-tenant support',
          'API gateway',
          'Load balancing',
          'CI/CD pipeline',
          '12 months free support',
        ],
        notIncluded: [],
        popular: false,
        tier: 'premium',
      },
    ],
  },
];

const faqs = [
  {
    question: 'Is GST included in the pricing?',
    answer: 'No, all prices are exclusive of GST. GST will be applicable separately as per government regulations.',
  },
  {
    question: 'What are the payment terms?',
    answer: 'We follow a 50% advance payment and 50% on completion structure. For larger projects, milestone-based payment options are also available.',
  },
  {
    question: 'Do you offer EMI options?',
    answer: 'Yes, EMI options are available for projects valued at ₹5,00,000 and above.',
  },
  {
    question: 'What happens after the free support period ends?',
    answer: 'After the free support period, you can opt for an AMC (Annual Maintenance Contract) starting from ₹50,000 per year.',
  },
  {
    question: 'Is the pricing fixed?',
    answer: 'The prices listed are starting points. A final quote will be provided based on your specific project requirements. Please contact us for custom requirements.',
  },
  {
    question: 'What is the pricing for B2B partnerships?',
    answer: 'B2B partnerships have custom pricing that depends on volume and long-term commitment. Please contact us for a detailed discussion.',
  },
];

export default function Pricing() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'basic':
        return <Zap className="w-5 h-5" />;
      case 'standard':
        return <Star className="w-5 h-5" />;
      case 'premium':
        return <Crown className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'basic':
        return 'from-blue-500 to-cyan-500';
      case 'standard':
        return 'from-purple-500 to-pink-500';
      case 'premium':
        return 'from-amber-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`min-h-screen ${isLight ? 'bg-gray-50' : 'bg-slate-900'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        isLight ? 'bg-white/85 border-gray-200' : 'bg-slate-900/85 border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
              NexGen Solutions
            </span>
          </div>
          <a
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isLight 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 sm:py-24 overflow-hidden">
        <div className={`absolute inset-0 ${isLight ? 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50' : 'bg-gradient-to-br from-purple-600/10 to-cyan-600/10'}`} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Transparent{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            Quality IT solutions at competitive Indian market rates. Choose the perfect plan for your business needs.
          </p>
        </div>
      </div>

      {/* Pricing Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {pricingPlans.map((category, categoryIndex) => (
          <div key={category.category} className={categoryIndex > 0 ? 'mt-24' : ''}>
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                {category.category}
              </h2>
              <p className={`text-lg ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                Choose the perfect package for your needs
              </p>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                    plan.popular
                      ? isLight
                        ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 shadow-xl shadow-purple-100'
                        : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 shadow-xl shadow-purple-500/20'
                      : isLight
                      ? 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg'
                      : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:shadow-xl'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Tier Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getTierColor(plan.tier)} flex items-center justify-center text-white`}>
                      {getTierIcon(plan.tier)}
                    </div>
                    <h3 className={`text-xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className={`text-sm mb-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                      {plan.duration}
                    </div>
                    <div className={`text-4xl font-bold ${isLight ? 'text-gray-900' : 'text-white'}`}>
                      {plan.price}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} />
                        <span className={`text-sm ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 opacity-50">
                        <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isLight ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm line-through ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/#contact"
                    target="_blank"
                    className={`w-full py-3 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105'
                        : isLight
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Custom Pricing CTA */}
        <div className={`mt-24 p-8 sm:p-12 rounded-3xl text-center ${
          isLight 
            ? 'bg-gradient-to-br from-purple-100 to-cyan-100 border border-purple-200' 
            : 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10'
        }`}>
          <h3 className={`text-3xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Need Custom Solution?
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            Custom pricing is available for B2B partnerships, project outsourcing, and enterprise solutions. 
            We will provide a tailored quote based on your specific requirements.
          </p>
          <a
            href="/#contact"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:scale-105"
          >
            Contact Us for Custom Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`group rounded-xl ${
                  isLight 
                    ? 'bg-white border border-gray-200' 
                    : 'bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                <summary className={`flex items-center justify-between p-6 cursor-pointer font-semibold ${
                  isLight ? 'text-gray-900' : 'text-white'
                }`}>
                  {faq.question}
                  <span className="ml-4 flex-shrink-0">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className={`px-6 pb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t ${isLight ? 'border-gray-200 bg-gray-100' : 'border-white/5 bg-slate-950'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} NexGen Solutions. All prices are in Indian Rupees (₹) and exclusive of GST.
          </p>
        </div>
      </footer>
    </div>
  );
}
