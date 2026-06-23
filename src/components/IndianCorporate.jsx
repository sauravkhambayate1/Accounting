import { useEffect, useRef } from 'react';
import { Landmark } from 'lucide-react';
import Navbar from './Navbar';


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
