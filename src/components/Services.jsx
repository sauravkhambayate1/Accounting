import { useEffect, useRef } from 'react';
import {
    FileText, Receipt, BookOpen, Users, Search, Building2,
    LineChart, CheckCircle2
} from 'lucide-react';

const services = [
    {
        icon: FileText,
        title: 'Tax Filing & Returns',
        description: 'Comprehensive income tax filing, ITR preparation, and tax planning strategies to minimize your liability.',
        features: ['Individual & Corporate', 'Tax Planning', 'Advance Tax'],
        color: 'blue',
        gradient: 'from-blue-500 to-blue-600',
        bg: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        icon: Receipt,
        title: 'GST Services',
        description: 'End-to-end GST registration, monthly filings, input tax credit management, and GST compliance audit.',
        features: ['GST Registration', 'Monthly Returns', 'ITC Reconciliation'],
        color: 'emerald',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'bg-emerald-50',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
    },
    {
        icon: BookOpen,
        title: 'Bookkeeping',
        description: 'Accurate financial record maintenance, bank reconciliations, and real-time financial reporting.',
        features: ['Daily Accounting', 'Bank Reconciliation', 'MIS Reports'],
        color: 'amber',
        gradient: 'from-amber-500 to-orange-500',
        bg: 'bg-amber-50',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
    },
    {
        icon: Users,
        title: 'Payroll Services',
        description: 'Complete payroll management including salary processing, PF/ESI compliance, and payslip generation.',
        features: ['Salary Processing', 'PF & ESI', 'TDS on Salary'],
        color: 'rose',
        gradient: 'from-rose-500 to-pink-600',
        bg: 'bg-rose-50',
        iconBg: 'bg-rose-100',
        iconColor: 'text-rose-600',
    },
    {
        icon: Search,
        title: 'Audit Services',
        description: 'Statutory, internal, and tax audits conducted by experienced CAs ensuring compliance and transparency.',
        features: ['Statutory Audit', 'Internal Audit', 'Tax Audit'],
        color: 'violet',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
    },
    {
        icon: Building2,
        title: 'Company Registration',
        description: 'Hassle-free company incorporation, LLP registration, and complete post-incorporation compliance setup.',
        features: ['Pvt Ltd / LLP', 'ROC Compliance', 'Trademark Filing'],
        color: 'cyan',
        gradient: 'from-cyan-500 to-sky-600',
        bg: 'bg-cyan-50',
        iconBg: 'bg-cyan-100',
        iconColor: 'text-cyan-600',
    },
    {
        icon: LineChart,
        title: 'Financial Consulting',
        description: 'Strategic financial planning, CFO services, investment advisory, and business growth consulting.',
        features: ['CFO Services', 'Business Planning', 'Investment Advisory'],
        color: 'slate',
        gradient: 'from-slate-600 to-slate-800',
        bg: 'bg-slate-50',
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        const elements =
            sectionRef.current.querySelectorAll(
                ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate, .reveal-up"
            );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Subtle bg decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="section-tag">
                        <Receipt className="w-4 h-4" />
                        Our Services
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                        Comprehensive Financial{' '}
                        <span className="gradient-text-blue">Solutions</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        From tax compliance to strategic financial planning, we offer a full suite of accounting and consultancy services tailored for businesses of all sizes.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const delay = `${(index % 3) * 0.1}s`;
                        return (
                            <div
                                key={service.title}
                                className="reveal gradient-border group cursor-pointer"
                                style={{ transitionDelay: delay }}
                            >
                                <div className="bg-white rounded-2xl p-7 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover border border-slate-100">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                                        <Icon className={`w-7 h-7 ${service.iconColor}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                                    {/* Features */}
                                    <ul className="flex flex-col gap-2 mb-6">
                                        {service.features.map((feat) => (
                                            <li key={feat} className="flex items-center gap-2.5 text-sm text-slate-600">
                                                <CheckCircle2 className={`w-4 h-4 ${service.iconColor} flex-shrink-0`} />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
