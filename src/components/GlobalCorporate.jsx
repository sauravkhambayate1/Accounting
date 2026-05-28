import { useEffect, useRef } from 'react';
import { Globe, TrendingUp, ArrowRight, Award, FileText, BarChart3, DollarSign } from 'lucide-react';
import Navbar from './Navbar';

const services = [
    { name: 'Multi-Country Tax Compliance', icon: FileText },
    { name: 'Transfer Pricing Documentation', icon: BarChart3 },
    { name: 'Consolidated Financial Reporting', icon: FileText },
    { name: 'Foreign Exchange Management', icon: DollarSign },
    { name: 'International Audit Services', icon: Award },
    { name: 'Cross-Border M&A Advisory', icon: TrendingUp },
];

const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '18+', label: 'Years Experience' },
    { value: '500+', label: 'Global Clients' },
];

export default function GlobalCorporate() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen" ref={sectionRef}>
            <Navbar />

            {/* ── Hero ── */}
            <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">

                {/* Background: Earth at night from space */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="" aria-hidden="true"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-slate-900/70" />
                    {/* Blue brand tint */}
                    <div className="absolute inset-0 bg-blue-950/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Text */}
                        <div className="animate-fade-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-sm font-semibold mb-6">
                                <Globe className="w-4 h-4" />
                                <span>Global Corporations</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                                Global Financial{' '}
                                <span className="gradient-text">Excellence</span>
                            </h1>

                            <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                                Comprehensive accounting and tax services for multinational
                                corporations. Navigate global compliance, optimize tax positions,
                                and achieve financial clarity across all operations.
                            </p>

                            {/* Stats row */}
                            <div className="flex flex-wrap gap-8">
                                {stats.map(({ value, label }) => (
                                    <div key={label}>
                                        <p className="text-3xl font-bold text-white">{value}</p>
                                        <p className="text-sm text-white/50 mt-0.5">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Corporate team image */}
                        <div className="animate-fade-up relative hidden lg:block">
                            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                                <img
                                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Global corporate professionals"
                                    className="w-full h-[460px] object-cover"
                                />
                                {/* Blend bottom into dark hero */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                                {/* Blend left edge */}
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl">
                                <p className="text-xs text-slate-500 mb-0.5">Clients Worldwide</p>
                                <p className="text-xl font-bold text-slate-900">500+</p>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl">
                                <p className="text-xs text-slate-500 mb-0.5">Compliance Rate</p>
                                <p className="text-xl font-bold text-emerald-600">99.8%</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-14">
                        <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
                            Our Global Services
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Comprehensive solutions tailored for multinational organizations.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{name}</h3>
                                        <div className="flex items-center gap-2 mt-3 text-primary-600 text-sm font-medium">
                                            Learn More
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}
