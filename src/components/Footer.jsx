import logo from "../assets/Logo.jpeg";

const quickLinks = [
    { label: 'Home', href: '/' },
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
        hoverClass: 'hover:text-blue-400'
    },
];

const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5 mb-5">
                            <img
                                src={logo}
                                alt="One Page Tax & Finance Solutions"
                                className="
                                        w-11
                                        h-11
                                        sm:w-14
                                        sm:h-14
                                        object-cover
                                        rounded-2xl
                                        shadow-lg
                                        border
                                        border-white/20
                                        group-hover:scale-105
                                        transition-all
                                        duration-300
                                    "
                            />
                            <div>
                                <p className="font-display font-bold text-xl text-white leading-tight">One Page</p>
                                <p className="text-[10px] font-medium tracking-widest uppercase text-gold-400 leading-tight">Tax &Finance solutions</p>
                            </div>
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Your trusted accounting, taxation, and business consultancy partner. Expert CAs
                            serving 500+ clients across India since 2009.
                        </p>

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['ICAI Registered', 'ISO 9001:2015', 'GST Practitioner'].map((badge) => (
                                <span
                                    key={badge}
                                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gold-500/30 text-gold-400/80 bg-gold-500/5 tracking-wide"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 ${s.hoverClass} hover:bg-white/10 hover:border-white/20 transition-all duration-200`}
                                >
                                    <i className={`${s.icon} text-sm`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <i className="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                            Our Services
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <i className="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                            Contact Info
                        </h4>
                        <ul className="flex flex-col gap-4">

                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/5">
                                    <i className="fa-solid fa-phone text-emerald-400 text-xs" />
                                </div>
                                <div>
                                    <a href="tel:+919876543210" className="text-white/80 text-sm hover:text-gold-400 transition-colors duration-200">
                                        +91 98765 43210
                                    </a>
                                    <p className="text-white/40 text-xs mt-0.5">Mon – Sat, 9AM – 7PM IST</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/5">
                                    <i className="fa-solid fa-envelope text-blue-400 text-xs" />
                                </div>
                                <div>
                                    <a href="mailto:info@taxwiseconsultancy.in" className="text-white/80 text-sm hover:text-gold-400 transition-colors duration-200">
                                        info@taxwiseconsultancy.in
                                    </a>
                                    <p className="text-white/40 text-xs mt-0.5">We reply within 24 hours</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/5">
                                    <i className="fa-solid fa-location-dot text-rose-400 text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/80 text-sm">Mumbai | Pune | Delhi | Bangalore</p>
                                    <p className="text-white/40 text-xs mt-0.5">Pan-India remote advisory</p>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} TaxWise Consultancy. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 flex-wrap justify-center">
                        {[
                            {
                                label: 'Privacy Policy',
                                href: '/privacy-policy'
                            },
                            {
                                label: 'Terms of Service',
                                href: '/terms-of-service'
                            },
                            {
                                label: 'Disclaimer',
                                href: '/disclaimer'
                            },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <p className="text-white/20 text-xs flex items-center gap-1.5">
                        <i className="fa-solid fa-shield-halved text-gold-500/40" />
                        Registered with ICAI
                    </p>
                </div>
            </div>

        </footer>
    );
}
