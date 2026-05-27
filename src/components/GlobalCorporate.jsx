import { useEffect, useRef } from 'react';

import {
    Globe,
    TrendingUp,
    Zap,
    Clock,
    Shield,
    ArrowRight,
    Award,
    FileText,
    BarChart3,
    DollarSign
} from 'lucide-react';

import Navbar from './Navbar';

const features = [
    {
        icon: Globe,
        title: 'Global Expertise',
        description:
            'Multi-country tax compliance, transfer pricing, international expansion support.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
    },
    {
        icon: TrendingUp,
        title: 'Scalable Solutions',
        description:
            'Grow your business with our flexible, scalable accounting infrastructure.',
        color: 'text-gold-500',
        bg: 'bg-gold-500/10',
    },
    {
        icon: Zap,
        title: 'Real-Time Insights',
        description:
            'Live dashboards, consolidated reporting, and instant financial visibility.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description:
            'ISO 27001 certified, SOC 2 compliant, dedicated security protocols.',
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description:
            'Global support team across time zones, always available when you need us.',
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
    },
    {
        icon: Award,
        title: 'Certified Team',
        description:
            'CPA, CA, CMA professionals with multinational accounting experience.',
        color: 'text-violet-500',
        bg: 'bg-violet-500/10',
    },
];

const services = [
    {
        name: 'Multi-Country Tax Compliance',
        icon: FileText
    },
    {
        name: 'Transfer Pricing Documentation',
        icon: BarChart3
    },
    {
        name: 'Consolidated Financial Reporting',
        icon: FileText
    },
    {
        name: 'Foreign Exchange Management',
        icon: DollarSign
    },
    {
        name: 'International Audit Services',
        icon: Award
    },
    {
        name: 'Cross-Border M&A Advisory',
        icon: TrendingUp
    },
];

export default function GlobalCorporate() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const elements =
            sectionRef.current?.querySelectorAll(
                '.reveal, .reveal-left, .reveal-right'
            );

        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-bg min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="animate-fade-up">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-6">
                            <Globe className="w-4 h-4" />
                            <span>Global Corporations</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Global Financial{' '}
                            <span className="gradient-text">
                                Excellence
                            </span>
                        </h1>

                        <p className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
                            Comprehensive accounting and tax services for
                            multinational corporations. Navigate global
                            compliance, optimize tax positions, and achieve
                            financial clarity across all operations.
                        </p>

                        <button className="btn-primary text-base shadow-gold-glow flex items-center gap-2">
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5" />
                        </button>

                    </div>
                </div>
            </section>
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-slate-900 mb-5">
                            Our Global Services
                        </h2>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Comprehensive solutions tailored for multinational
                            organizations.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.name}
                                    className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-primary-600" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-900">
                                                {service.name}
                                            </h3>

                                            <div className="flex items-center gap-2 mt-3 text-primary-600 text-sm font-medium">
                                                Learn More
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

        </div>
    );
}