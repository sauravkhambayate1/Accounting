import { useEffect, useRef } from "react";

import {
    MessageCircle,
    ClipboardList,
    FileCheck,
    FileText,
    Rocket,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Free Consultation",
        description:
            "Schedule a free call with our expert CA team. We listen to your needs, understand your business, and identify the best solutions.",
        duration: "Day 1",
        color: "primary",
    },

    {
        number: "02",
        icon: ClipboardList,
        title: "Document Collection",
        description:
            "We provide a simple checklist of required documents. Upload them securely through our portal — no physical visits needed.",
        duration: "Day 2–3",
        color: "gold",
    },

    {
        number: "03",
        icon: FileCheck,
        title: "Expert Processing",
        description:
            "Our qualified CAs review, prepare, and verify all filings with meticulous attention to detail and 100% compliance.",
        duration: "Day 3–5",
        color: "emerald",
    },

    {
        number: "04",
        icon: FileText,
        title: "Development of SOP & Checklist",
        description:
            "We develop SOPs and checklists to turn chaotic, person-dependent workflows into reliable, system-driven operations.",
        duration: "Day 4–6",
        color: "violet",
    },

    {
        number: "05",
        icon: Rocket,
        title: "Delivery & Support",
        description:
            "Receive final reports, filed returns, and certificates. Ongoing support from your dedicated account manager is included.",
        duration: "Day 5–7",
        color: "rose",
    },
];

const colorMap = {
    primary: {
        ring: "ring-primary-200",
        bg: "bg-primary-100",
        icon: "text-primary-600",
        badge: "bg-primary-600 text-white",
        number: "text-primary-200",
    },

    gold: {
        ring: "ring-gold-200",
        bg: "bg-gold-100",
        icon: "text-gold-600",
        badge: "bg-gold-500 text-white",
        number: "text-gold-200",
    },

    emerald: {
        ring: "ring-emerald-200",
        bg: "bg-emerald-100",
        icon: "text-emerald-600",
        badge: "bg-emerald-600 text-white",
        number: "text-emerald-200",
    },

    violet: {
        ring: "ring-violet-200",
        bg: "bg-violet-100",
        icon: "text-violet-600",
        badge: "bg-violet-600 text-white",
        number: "text-violet-200",
    },

    rose: {
        ring: "ring-rose-200",
        bg: "bg-rose-100",
        icon: "text-rose-600",
        badge: "bg-rose-600 text-white",
        number: "text-rose-200",
    },
};

export default function Process() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(
                    (e) =>
                        e.isIntersecting &&
                        e.target.classList.add("visible")
                );
            },
            { threshold: 0.1 }
        );

        sectionRef.current
            ?.querySelectorAll(".reveal")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="process"
            ref={sectionRef}
            className="py-12 bg-white relative overflow-hidden"
        >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-50 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="section-tag">
                        <Rocket className="w-4 h-4" />

                        How It Works
                    </span>

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                        Simple 5-Step{" "}
                        <span className="gradient-text-blue">
                            Process
                        </span>
                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Getting started is easy. Our streamlined
                        process ensures you receive expert service
                        without the hassle.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary-200 via-gold-200 via-emerald-200 via-violet-200 to-rose-200" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            const c = colorMap[step.color];

                            return (
                                <div
                                    key={step.number}
                                    className="reveal flex flex-col items-center text-center group"
                                    style={{
                                        transitionDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Icon circle */}
                                    <div className="relative mb-6">
                                        <div
                                            className={`w-16 h-16 rounded-2xl ring-2 ring-offset-4 ${c.ring} ${c.bg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-card-hover`}
                                        >
                                            <Icon
                                                className={`w-7 h-7 ${c.icon}`}
                                            />
                                        </div>

                                        {/* Duration badge */}
                                        <div
                                            className={`absolute -top-2 -right-2 ${c.badge} text-[10px] font-bold px-2 py-1 rounded-full shadow-sm`}
                                        >
                                            {step.duration}
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <p
                                        className={`font-display text-5xl font-bold ${c.number} mb-3 leading-none`}
                                    >
                                        {step.number}
                                    </p>

                                    <h3 className="text-slate-900 font-bold text-lg mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>

                                    {index < steps.length - 1 && (
                                        <ArrowRight className="w-5 h-5 text-slate-300 mt-4 lg:hidden" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom note */}
                <div className="mt-16 reveal">
                    <div className="bg-gradient-to-r from-slate-900 to-primary-900 rounded-3xl p-8 md:p-10 grid md:grid-cols-3 gap-6 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-2xl" />

                        {[
                            {
                                val: "< 24hrs",
                                label: "Average response time",
                            },
                            {
                                val: "100%",
                                label:
                                    "Digital process — no paperwork",
                            },
                            {
                                val: "24/7",
                                label:
                                    "Dedicated client support",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="text-center relative"
                            >
                                <p className="text-3xl md:text-4xl font-bold font-display text-gold-400 mb-1">
                                    {item.val}
                                </p>

                                <p className="text-white/60 text-sm">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}