import { useEffect, useRef } from 'react';
import { Award, Target, Users, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';

const milestones = [
    { year: '2006', event: 'Founded in Mumbai, India' },
    { year: '2012', event: 'Expanded to UAE operations' },
    { year: '2018', event: 'ISO 9001:2015 Certified' },
    { year: '2023', event: '1,200+ Clients Served' },
];

const values = [
    { icon: Target, label: 'Our Mission', text: 'Empower businesses with financial clarity and compliance expertise.' },
    { icon: Award, label: 'Our Vision', text: 'Become the most trusted financial consultancy in South Asia and the Middle East.' },
];

const achievements = [
    'Registered with ICAI (Institute of Chartered Accountants of India)',
    'Approved GST Practitioner by Indian Government',
    'Registered Tax Agent with UAE Federal Tax Authority',
    'ISO 9001:2015 Quality Management Certified',
    'Member of Association of Chartered Certified Accountants (ACCA)',
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
        sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
            observer.observe(el)
        );
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
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

                        {/* Floating stat cards */}
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3 border border-slate-100">
                            <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                                <Users className="w-5 h-5 text-primary-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 leading-tight">50+</p>
                                <p className="text-slate-500 text-xs">Qualified CAs</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3 border border-slate-100">
                            <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center">
                                <Globe2 className="w-5 h-5 text-gold-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 leading-tight">3</p>
                                <p className="text-slate-500 text-xs">Countries Served</p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="absolute left-6 top-6 hidden xl:block">
                            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-card p-4 max-w-[160px] border border-slate-100">
                                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Our Journey</p>
                                <div className="flex flex-col gap-2.5">
                                    {milestones.map((m) => (
                                        <div key={m.year} className="flex items-start gap-2">
                                            <span className="text-[10px] font-bold text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0">{m.year}</span>
                                            <span className="text-[11px] text-slate-600 leading-tight">{m.event}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="reveal-right">
                        <span className="section-tag">
                            <Award className="w-4 h-4" />
                            About FinPro
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            18+ Years of Financial{' '}
                            <span className="gradient-text-blue">Excellence</span>
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            FinPro Consultancy was established in 2006 with a vision to democratize premium financial services for businesses of all sizes. Today, we are a leading multi-disciplinary accounting and consultancy firm with offices in Mumbai, Delhi, and Dubai.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Our team of 50+ qualified Chartered Accountants, tax experts, and financial advisors brings deep domain expertise across industries. We combine traditional accounting values with modern technology to deliver fast, accurate, and insightful financial services.
                        </p>

                        {/* Values */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {values.map((v) => {
                                const Icon = v.icon;
                                return (
                                    <div key={v.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-primary-600" />
                                            </div>
                                            <span className="font-semibold text-slate-800 text-sm">{v.label}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Credentials */}
                        <div className="bg-primary-50 rounded-2xl p-6 mb-8 border border-primary-100">
                            <p className="font-semibold text-slate-800 text-sm mb-3">Our Credentials & Registrations</p>
                            <ul className="flex flex-col gap-2">
                                {achievements.map((a) => (
                                    <li key={a} className="flex items-start gap-2.5 text-sm text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
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
