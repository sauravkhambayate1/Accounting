import { useEffect, useRef } from 'react';
import {
    Landmark, BarChart3, TrendingUp, Target, Zap, Users, ArrowRight,
    FileText, DollarSign, Award, CheckCircle2
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
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">

                {/* Globe / Universe background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/18048286/pexels-photo-18048286.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="" aria-hidden="true"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlay — keeps text legible */}
                    <div className="absolute inset-0 bg-slate-900/70" />
                    {/* Optional: blue tint to match your brand */}
                    <div className="absolute inset-0 bg-blue-950/30" />
                </div>

                {/* Content sits above bg */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Text */}
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
                                Specialized accounting and tax services designed for Indian corporates.
                                Navigate GST, income tax, ROC compliance, and maximize your business efficiency.
                            </p>
                        </div>

                        {/* Right: Corporate image floated over the globe bg */}
                        <div className="animate-fade-up relative hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                                <img
                                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Indian corporate professionals"
                                    className="w-full h-[460px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl">
                                <p className="text-xs text-slate-500 mb-0.5">Returns Filed</p>
                                <p className="text-xl font-bold text-slate-900">10,000+</p>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl">
                                <p className="text-xs text-slate-500 mb-0.5">Compliance Rate</p>
                                <p className="text-xl font-bold text-emerald-600">99.8%</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
