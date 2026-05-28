import { useEffect, useRef } from 'react';
import { Award, Target, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

const values = [
    { icon: Target, label: 'Our Mission', text: 'Not only compliance but value addition' },
    { icon: Eye, label: 'Our Vision', text: 'Become the most trusted financial consultancy in South Asia and Europe' },
];

const achievements = [
    'Premier multidisciplinary accounting, taxation & financial advisory solutions',
    'Advanced tax planning and deep corporate insights',
    'Focused on creating sustainable value addition for businesses',
    'Helping businesses move from "Best Practices to Next Practices"',
    'Dedicated growth partner for financial management and strategy',
];

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'));
            },
            { threshold: 0.1 }
        );
        sectionRef.current
            ?.querySelectorAll('.reveal-left, .reveal-right')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

                    {/* ── LEFT: Image — stretches to match content height ── */}
                    <div className="reveal-left relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.13)] min-h-[420px] lg:min-h-0">
                        <img
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="One Tax Finance team"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        <div className="absolute bottom-5 left-5">
                            <p className="text-white/70 text-xs tracking-widest mb-0.5">Trusted Since</p>
                            <p className="text-white text-4xl font-bold font-display">2006</p>
                        </div>
                    </div>

                    {/* ── RIGHT: Content ── */}
                    <div className="reveal-right flex flex-col justify-center gap-5">

                        <span className="section-tag inline-flex items-center gap-1.5 w-fit">
                            <Award className="w-3.5 h-3.5" />
                            About One Tax Finance
                        </span>

                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-tight">
                            18+ Years of Financial{' '}
                            <span className="gradient-text-blue">Excellence</span>
                        </h2>

                        <div className="flex flex-col gap-3 text-slate-600 text-[15px] leading-relaxed">
                            <p>
                                Welcome to One Page Tax & Financial Solutions, your premier
                                multidisciplinary accounting, taxation, and financial advisory growth partner.
                            </p>
                            <p>
                                Over our 7+ years of journey, we have moved businesses from "Best Practices
                                to Next Practices" — not just through compliance, but through custom strategy
                                frameworks, advanced tax planning, and deep corporate insights.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {values.map(({ icon: Icon, label, text }) => (
                                <div key={label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="font-semibold text-slate-800 text-sm">{label}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                            <p className="font-semibold text-slate-800 text-sm mb-3">Our Highlights</p>
                            <ul className="flex flex-col gap-2">
                                {achievements.map((a) => (
                                    <li key={a} className="flex items-start gap-2.5 text-[13.5px] text-slate-600 leading-snug">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => {
                                const el = document.getElementById('contact');
                                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                            }}
                            className="btn-primary-blue self-start"
                        >
                            Work With Us
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
