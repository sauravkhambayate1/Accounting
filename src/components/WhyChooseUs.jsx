import { useEffect, useRef } from 'react';
import {
    ShieldCheck, Zap, Users, DollarSign,
    Clock, Trophy, HeartHandshake, TrendingUp
} from 'lucide-react';

const reasons = [
    {
        icon: ShieldCheck,
        title: 'Trusted & Transparent',
        description: 'Over 18 years of proven track record with complete transparency in all financial dealings. Your trust is our foundation.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
    },
    {
        icon: Trophy,
        title: 'Expert CA Team',
        description: '50+ qualified Chartered Accountants with deep expertise in Indian and international taxation laws.',
        color: 'text-gold-500',
        bg: 'bg-gold-500/10',
    },
    {
        icon: Zap,
        title: 'Fast Turnaround',
        description: 'We commit to quick delivery without compromising quality. Most returns filed within 24-48 hours.',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: DollarSign,
        title: 'Competitive Pricing',
        description: 'Premium services at affordable prices. No hidden charges. Flexible packages designed for startups and enterprises.',
        color: 'text-rose-500',
        bg: 'bg-rose-500/10',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Round-the-clock support via phone, email, and chat. Your queries are answered within 2 hours.',
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
    },
    {
        icon: HeartHandshake,
        title: 'Dedicated Manager',
        description: 'Every client gets a dedicated relationship manager who understands your business inside and out.',
        color: 'text-violet-500',
        bg: 'bg-violet-500/10',
    },
    {
        icon: TrendingUp,
        title: 'Growth-Focused',
        description: 'We don\'t just file returns — we actively advise on financial strategies to grow your business.',
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
    },
    {
        icon: Users,
        title: 'Multi-Industry Expertise',
        description: 'Extensive experience across IT, manufacturing, retail, healthcare, real estate, and more sectors.',
        color: 'text-teal-500',
        bg: 'bg-teal-500/10',
    },
];

export default function WhyChooseUs() {
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
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="why-us" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-900/20 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-4">
                        <Trophy className="w-4 h-4" />
                        Why Choose Us
                    </div>
                    <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-white mb-5">
                        The One Page || Tax & Finance Solutions
                        <span className="gradient-text">Advantage</span>
                    </h2>
                    <p className="reveal text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        We combine deep expertise, cutting-edge technology, and genuine care for your success. Here's what sets us apart.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={reason.title}
                                className="reveal group"
                                style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
                            >
                                <div className="glass-card rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:bg-white/12 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer">
                                    <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                        <Icon className={`w-6 h-6 ${reason.color}`} />
                                    </div>
                                    <h3 className="text-white font-semibold text-base mb-2.5">{reason.title}</h3>
                                    <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-16 reveal">
                    <div className="rounded-3xl bg-gradient-to-r from-primary-700 via-primary-800 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
                        <div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                                Ready to simplify your finances?
                            </h3>
                            <p className="text-white/60">Join 1,200+ businesses who trust The One Page || Tax & Finance Solutions for their financial success.</p>
                        </div>
                        <button
                            onClick={() => {
                                const el = document.getElementById('contact');
                                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                            }}
                            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 font-bold rounded-xl hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                        >
                            Start Today — It's Free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
