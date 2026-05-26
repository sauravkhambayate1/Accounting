import { useEffect, useRef } from 'react';
import {
    Landmark, BarChart3, TrendingUp, Target, Zap, Users, ArrowRight,
    FileText, DollarSign, Award, CheckCircle2, GraduationCap
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const features = [
    {
        icon: Landmark,
        title: 'Indian Tax Expertise',
        description: 'Expert handling of Income Tax, GST, TDS, and complete Indian compliance requirements.',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
    },
    {
        icon: BarChart3,
        title: 'Regulatory Compliance',
        description: 'Full ROC compliance, audit requirements, and statutory filing expertise.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
    },
    {
        icon: TrendingUp,
        title: 'Growth Strategies',
        description: 'Tax-efficient structures, incentives optimization, and expansion planning.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: Target,
        title: 'Cost Optimization',
        description: 'Strategic tax planning to minimize liability and maximize profitability.',
        color: 'text-gold-500',
        bg: 'bg-gold-500/10',
    },
    {
        icon: Zap,
        title: 'Quick Turnaround',
        description: 'Fast filing, instant responses, and efficient compliance management.',
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
    },
    {
        icon: Users,
        title: 'Dedicated Support',
        description: 'Relationship managers who understand the Indian business landscape deeply.',
        color: 'text-violet-500',
        bg: 'bg-violet-500/10',
    },
];

const services = [
    { name: 'Income Tax Planning & Filing', icon: FileText },
    { name: 'GST Registration & Compliance', icon: CheckCircle2 },
    { name: 'TDS/TCS Management', icon: DollarSign },
    { name: 'Corporate Audit Services', icon: Award },
    { name: 'Statutory Compliance', icon: Landmark },
    { name: 'Entity Structuring & Planning', icon: Target },
];

export default function IndianCorporate() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
            observer.observe(el)
        );
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="hero-bg min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="animate-fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-6">
                            <Landmark className="w-4 h-4" />
                            <span>Indian Corporations</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Indian Tax{' '}
                            <span className="gradient-text">Mastery</span>
                        </h1>

                        <p className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
                            Specialized accounting and tax services designed for Indian corporates. Navigate GST, income tax, ROC compliance, and maximize your business efficiency.
                        </p>

                        <button className="btn-primary text-base shadow-gold-glow">
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section ref={sectionRef} className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                            Why Choose FinPro for{' '}
                            <span className="gradient-text-blue">Indian Corporate Needs</span>
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Trusted by leading Indian corporations for complete tax and compliance excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <div key={feature.title} className="reveal group">
                                    <div className="bg-white rounded-2xl p-7 border border-slate-100 h-full hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                        <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5`}>
                                            <Icon className={`w-7 h-7 ${feature.color}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal">
                        <h2 className="font-display text-4xl font-bold text-slate-900 mb-5">
                            Our Indian Services
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Complete compliance and advisory for Indian businesses.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.name} className="reveal bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900">{service.name}</h3>
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

            {/* CTA */}
            <section className="py-24 bg-primary-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <h2 className="font-display text-4xl font-bold text-white mb-6">
                        Optimize Your Indian Tax Position
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                        Let our Indian tax experts handle compliance while you focus on growing your business.
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 font-semibold rounded-xl hover:shadow-gold-glow transition-all duration-300">
                        Get Started Today
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
