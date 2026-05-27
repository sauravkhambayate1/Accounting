import { useEffect, useRef } from 'react';
import { Award, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const values = [
    {
        icon: Target,
        label: 'Our Mission',
        text: 'Not only compliance but value addition',
    },
    {
        icon: Award,
        label: 'Our Vision',
        text: 'Become the most trusted financial consultancy in South Asia and Europe',
    },
];

const achievements = [
    'Premier multidisciplinary accounting, taxation & financial advisory solutions',
    'Advanced tax planning and deep corporate insights',
    'Focused on creating sustainable value addition for businesses',
    'Helping businesses move from “Best Practices to Next Practices”',
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
            ?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image + floating cards */}
                    <div className="reveal-left relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                            <img
                                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="FinPro team"
                                className="w-full h-[480px] object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white/80 text-sm mb-1">Trusted Since</p>
                                <p className="text-white text-3xl font-bold font-display">2006</p>
                            </div>
                        </div>

                    </div>

                    {/* Right: Content */}
                    <div className="reveal-right">
                        <span className="section-tag">
                            <Award className="w-4 h-4" />
                            About One Tax Finance
                        </span>

                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            18+ Years of Financial{' '}
                            <span className="gradient-text-blue">Excellence</span>
                        </h2>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            Welcome to One Page Tax & Financial Solutions, your premier
                            multidisciplinary accounting, taxation, and financial advisory
                            growth partner.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            Over our 7+ years of journey, we have moved businesses from
                            “Best Practices to Next Practices”.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-8">
                            We don't just focus on compliance — we actively focus on
                            creating sustainable value addition for your business.
                            Through our custom strategy frameworks, advanced tax planning,
                            and deep corporate insights, we take absolute responsibility
                            for your financial management so you can completely focus on
                            flourishing your business.
                        </p>

                        {/* Values */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {values.map((v) => {
                                const Icon = v.icon;

                                return (
                                    <div
                                        key={v.label}
                                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card"
                                    >
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-primary-600" />
                                            </div>

                                            <span className="font-semibold text-slate-800 text-sm">
                                                {v.label}
                                            </span>
                                        </div>

                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {v.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Credentials */}
                        <div className="bg-primary-50 rounded-2xl p-6 mb-8 border border-primary-100">
                            <p className="font-semibold text-slate-800 text-sm mb-3">
                                Our Highlights
                            </p>

                            <ul className="flex flex-col gap-2">
                                {achievements.map((a) => (
                                    <li
                                        key={a}
                                        className="flex items-start gap-2.5 text-sm text-slate-600"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => {
                                const el = document.getElementById('contact');

                                if (el)
                                    window.scrollTo({
                                        top:
                                            el.getBoundingClientRect().top +
                                            window.scrollY -
                                            80,
                                        behavior: 'smooth',
                                    });
                            }}
                            className="btn-primary-blue"
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