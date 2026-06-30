import logo from "../assets/Logo.jpeg";

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
    { label: 'Tax Filing & Returns', href: '#services' },
    { label: 'GST Services', href: '#services' },
    { label: 'Bookkeeping', href: '#services' },
    { label: 'Payroll Services', href: '#services' },
    { label: 'Audit Services', href: '#services' },
    { label: 'Company Registration', href: '#services' },
    { label: 'Financial Consulting', href: '#services' },
];

const socialLinks = [
    {
        icon: 'fa-brands fa-linkedin-in',
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        hoverClass: 'hover:text-blue-400',
    },
];

const scrollTo = (href) => {
    const id = href.replace('#', '');
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden">

            {/* ── Main footer grid ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">

                    {/* ── Brand Column ── */}
                    <div>

                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src={logo}
                                alt="One Page Tax & Finance Solutions"
                                className="w-11 h-11 object-cover rounded-xl border border-white/20"
                            />

                            <div>
                                <p className="font-bold text-lg text-white leading-tight m-0">
                                    One Page
                                </p>

                                <p className="text-[10px] uppercase tracking-widest text-gold-400 m-0">
                                    Tax & Finance Solutions
                                </p>
                            </div>
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                            Your trusted accounting, taxation and business consultancy
                            partner serving clients across India.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {['ICAI Registered', 'ISO 9001:2015', 'GST Practitioner'].map((badge) => (
                                <span
                                    key={badge}
                                    className="text-[10px] px-2 py-1 rounded-full border border-gold-500/30 text-gold-400/80"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400"
                                >
                                    <i className={s.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Mobile/Tablet Compact Links Section ── */}
                    <div className="md:col-span-2 lg:col-span-2">

                        <div className="grid grid-cols-2 gap-4 sm:gap-8">

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">
                                    Quick Links
                                </h4>

                                <ul className="space-y-1.5">
                                    {quickLinks.map((link) => (
                                        <li key={link.label}>
                                            <button
                                                onClick={() => scrollTo(link.href)}
                                                className="text-white/50 hover:text-gold-400 text-xs sm:text-sm transition-colors"
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">
                                    Our Services
                                </h4>

                                <ul className="space-y-1.5">
                                    {serviceLinks.map((link) => (
                                        <li key={link.label}>
                                            <button
                                                onClick={() => scrollTo(link.href)}
                                                className="text-white/50 hover:text-gold-400 text-xs sm:text-sm text-left transition-colors"
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* ── Contact Info ── */}
                    <div>

                        <h4 className="text-white font-semibold text-xs sm:text-sm mb-4 uppercase tracking-wider">
                            Contact Info
                        </h4>

                        <ul className="flex flex-col gap-4">

                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <i className="fa-solid fa-phone text-emerald-400 text-xs" />
                                </div>

                                <div>
                                    <a
                                        href="tel:+919876543210"
                                        className="text-white/80 text-sm hover:text-gold-400"
                                    >
                                        +91 98765 43210
                                    </a>

                                    <p className="text-white/40 text-xs">
                                        Mon – Sat, 9AM – 7PM IST
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <i className="fa-solid fa-envelope text-blue-400 text-xs" />
                                </div>

                                <div>
                                    <a
                                        href="mailto:info@taxwiseconsultancy.in"
                                        className="text-white/80 text-sm hover:text-gold-400 break-all"
                                    >
                                        info@taxwiseconsultancy.in
                                    </a>

                                    <p className="text-white/40 text-xs">
                                        We reply within 24 hours
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                    <i className="fa-solid fa-location-dot text-rose-400 text-xs" />
                                </div>

                                <div>
                                    <p className="text-white/80 text-sm">
                                        Mumbai | Pune | Delhi | Bangalore
                                    </p>

                                    <p className="text-white/40 text-xs">
                                        Pan-India remote advisory
                                    </p>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

            {/* ── Bottom bar ── */}
            <div className="border-t border-white/5 py-5 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap items-center justify-between gap-3 text-center">

                    <p className="text-white/30 text-xs order-3 sm:order-1 m-0">
                        © {new Date().getFullYear()} TaxWise Consultancy. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center order-1 sm:order-2">
                        {[
                            { label: 'Privacy Policy', href: '/privacy-policy' },
                            { label: 'Terms of Service', href: '/terms-of-service' },
                            { label: 'Disclaimer', href: '/disclaimer' },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200 whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <p className="text-white/20 text-xs flex items-center gap-1.5 order-2 sm:order-3 m-0">
                        <i className="fa-solid fa-shield-halved text-gold-500/40" />
                        Registered with ICAI
                    </p>

                </div>
            </div>

        </footer>
    );
}
