import { useEffect, useRef, useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: 'What specific accounting services do you provide to GCC businesses?',
        answer:
            'We focus exclusively on core back-end accounting. This includes daily bookkeeping, bank reconciliations, accounts payable and receivable tracking, basic payroll processing, fixed asset management, and monthly management reporting.',
    },

    {
        question: 'Do you handle our UAE Corporate Tax (CT) or VAT filings?',
        answer:
            'No, we do not handle tax filings, tax optimization, or direct communication with regional tax authorities. However, we keep your books highly organized and audit-ready so your Taxation team can file your CT and VAT returns effortlessly.',
    },

    {
        question:
            'Can your back-end team work directly with our local GCC tax auditors and consultants?',
        answer:
            'Yes, we collaborate seamlessly with your onshore tax consultants or auditors. We quickly generate and provide the precise ledgers, trial balances, and transaction schedules they require to complete your returns.',
    },

    {
        question:
            'Which cloud accounting platforms do you support?',
        answer:
            'We work within your existing software setup. Our team is highly proficient in platforms widely used across the GCC, including Zoho Books, QuickBooks Online, Xero, and Tally Prime.',
    },

    {
        question:
            'How do we securely share our financial data, invoices, and receipts with your team?',
        answer:
            'We set up secure, encrypted shared folders via Google Drive, OneDrive, or Dropbox. You simply upload your digital receipts and invoices, and our team processes them daily or weekly based on our agreement.',
    },

    {
        question:
            'How do you manage communication and the time zone difference?',
        answer:
            'The time difference between India and the GCC is minimal (only 1.5 to 2.5 hours). Our teams overlap for almost the entire business day, ensuring prompt communication via email, Microsoft Teams, or WhatsApp.',
    },
];

export default function FAQ() {
    const sectionRef = useRef(null);

    const [openIndex, setOpenIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) =>
                        e.isIntersecting &&
                        e.target.classList.add('visible')
                ),
            { threshold: 0.1 }
        );

        sectionRef.current
            ?.querySelectorAll(
                '.reveal, .reveal-left, .reveal-right'
            )
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="py-12 my-12 bg-white relative overflow-hidden"
        >
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
                            <span className="gradient-text-blue">
                                Questions
                            </span>
                        </h2>

                        <p className="text-slate-500 leading-relaxed mb-8">
                            Have more questions? Our team is always
                            ready to help. Reach out and we'll get
                            back to you within 2 hours.
                        </p>

                        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
                            <MessageCircle className="w-8 h-8 text-gold-300 mb-3" />

                            <p className="font-semibold text-lg mb-2">
                                Still have questions?
                            </p>

                            <p className="text-white/70 text-sm mb-4 leading-relaxed">
                                Our experts are available Mon-Fri
                                10AM-6PM IST.
                            </p>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@finproconsultancy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
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
                                    onClick={() =>
                                        setOpenIndex(
                                            openIndex === i
                                                ? null
                                                : i
                                        )
                                    }
                                    className="w-full flex items-start justify-between gap-4 px-4 py-3.5 text-left"
                                >
                                    <div className="flex items-start gap-3">
                                        <span
                                            className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 ${openIndex === i
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-slate-100 text-slate-500'
                                                }`}
                                        >
                                            {String(i + 1).padStart(
                                                2,
                                                '0'
                                            )}
                                        </span>

                                        <span
                                            className={`font-semibold text-base leading-snug ${openIndex === i
                                                ? 'text-primary-800'
                                                : 'text-slate-800'
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                    </div>

                                    <ChevronDown
                                        className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === i
                                            ? 'rotate-180 text-primary-600'
                                            : 'text-slate-400'
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${openIndex === i
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="px-4 pb-4 text-slate-600 text-sm leading-relaxed ml-10">
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