import { useEffect, useRef, useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: 'What types of businesses do you work with?',
        answer: 'We work with businesses of all sizes — from startups and freelancers to mid-sized companies and large enterprises. Our clients span industries including IT, manufacturing, retail, healthcare, real estate, e-commerce, and more across India and UAE.',
    },
    {
        question: 'How long does tax filing take?',
        answer: 'For standard income tax returns (ITR-1, ITR-2), filing is completed within 24-48 hours of receiving all documents. Complex corporate filings (ITR-6) may take 3-5 business days. We always communicate the timeline upfront.',
    },
    {
        question: 'Do you provide GST registration services?',
        answer: 'Yes, we handle the complete GST registration process from application to certificate issuance, typically completed within 5-7 working days. We also provide ongoing GST filing (monthly/quarterly), ITC reconciliation, and GST audit services.',
    },
    {
        question: 'What is your pricing model?',
        answer: 'We offer flexible pricing based on business size and service complexity. We have monthly retainer packages starting from ₹2,999/month for small businesses, project-based pricing for one-time needs, and customized packages for enterprises. All pricing is transparent with no hidden charges.',
    },
    {
        question: 'Can you handle UAE VAT and corporate tax?',
        answer: 'Absolutely. Our Dubai-based team specializes in UAE Federal Tax Authority (FTA) compliance including VAT registration, quarterly VAT returns, Corporate Tax registration and filing under the new UAE CT regime effective 2023.',
    },
    {
        question: 'Is my financial data secure with you?',
        answer: 'Yes, data security is our top priority. We use 256-bit SSL encryption, secure cloud storage, and role-based access controls. We are ISO 27001 compliant and follow strict confidentiality protocols. Your data is never shared with third parties.',
    },
    {
        question: 'Do you offer bookkeeping for e-commerce businesses?',
        answer: 'Yes, we specialize in e-commerce accounting including Amazon, Flipkart, and Shopify reconciliation, marketplace TDS management, inventory accounting, and multi-currency bookkeeping for international sellers.',
    },
    {
        question: 'Can I switch to FinPro from my current CA?',
        answer: 'Absolutely. Switching is easy and we handle the entire transition. We will collect your previous records, review past filings, and ensure continuity. Most transitions are completed within 2 weeks with zero disruption to your business.',
    },
];

export default function FAQ() {
    const sectionRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="faq" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-5 gap-16 items-start">
                    {/* Left */}
                    <div className="lg:col-span-2 reveal-left lg:sticky lg:top-28">
                        <span className="section-tag">
                            <HelpCircle className="w-4 h-4" />
                            FAQ
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">
                            Frequently Asked{' '}
                            <span className="gradient-text-blue">Questions</span>
                        </h2>
                        <p className="text-slate-500 leading-relaxed mb-8">
                            Have more questions? Our team is always ready to help. Reach out and we'll get back to you within 2 hours.
                        </p>

                        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
                            <MessageCircle className="w-8 h-8 text-gold-300 mb-3" />
                            <p className="font-semibold text-lg mb-2">Still have questions?</p>
                            <p className="text-white/70 text-sm mb-4 leading-relaxed">
                                Our experts are available Mon-Sat 9AM-7PM IST and Mon-Fri 9AM-6PM GST.
                            </p>
                            <a
                                href="mailto:info@finproconsultancy.com"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-200"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-3 flex flex-col gap-3 reveal">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i
                                    ? 'border-primary-200 bg-primary-50/50 shadow-card'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <div className="flex items-start gap-3">
                                        <span
                                            className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 ${openIndex === i ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-500'
                                                }`}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span
                                            className={`font-semibold text-base leading-snug ${openIndex === i ? 'text-primary-800' : 'text-slate-800'
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary-600' : 'text-slate-400'
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed ml-10">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
