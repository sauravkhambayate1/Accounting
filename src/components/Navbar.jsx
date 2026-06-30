import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

import logo from "../assets/Logo.jpeg";
import ContactModal from "./ConsultationModal";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isManualScrolling = useRef(false);
    const [activeSection, setActiveSection] = useState("home");

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const navigate = useNavigate();

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (isManualScrolling.current) return;

            if (window.scrollY < 100) {
                setActiveSection("home");
                return;
            }

            const sections = navLinks.map((link) =>
                link.href.replace("#", "")
            );

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && window.scrollY >= section.offsetTop - 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);

        const id = href.replace("#", "");
        isManualScrolling.current = true;
        setActiveSection(id);

        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const section = document.getElementById(id);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        }

        setTimeout(() => {
            isManualScrolling.current = false;
        }, 1000);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white shadow-[0_2px_30px_rgba(0,0,0,0.1)] py-2 sm:py-3"
                    : "bg-transparent py-3 sm:py-5"
                    }`}
                style={scrolled ? { backgroundColor: '#ffffff' } : {}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-2">

                        {/* Logo */}
                        <button
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2 group shrink-0"
                        >
                            <div className="relative shrink-0">
                                <img
                                    src={logo}
                                    alt="One Page Tax & Finance Solutions"
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-cover rounded-xl shadow-lg border border-white/20 group-hover:scale-105 transition-all duration-300"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <span
                                    className={`font-bold text-sm sm:text-base lg:text-lg leading-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"
                                        }`}
                                >
                                    One Page
                                </span>
                                <span
                                    className={`text-[8px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wide uppercase transition-colors duration-300 ${scrolled ? "text-blue-600" : "text-blue-200"
                                        }`}
                                >
                                    Tax & Finance Solutions
                                </span>
                            </div>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${scrolled
                                        ? activeSection === link.href.replace("#", "")
                                            ? "text-gold-500"
                                            : "text-slate-600 hover:text-gold-500 hover:bg-gold-50"
                                        : activeSection === link.href.replace("#", "")
                                            ? "text-gold-500"
                                            : "text-white/80 hover:text-gold-500 hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                            ? "w-4 bg-gold-400"
                                            : "w-0 group-hover:w-4 bg-gold-400"
                                            }`}
                                    />
                                </button>
                            ))}
                        </nav>

                        {/* Right Side: CTA + Toggle */}
                        <div className="flex items-center gap-2 shrink-0">

                            {/* Desktop + Tablet CTA */}
                            <button
                                onClick={handleShow}
                                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 text-xs sm:text-sm font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 whitespace-nowrap"
                            >
                                <span className="hidden md:inline">Book Your</span> Consultation
                            </button>

                            {/* Mobile CTA — visible only on xs screens */}
                            <button
                                onClick={handleShow}
                                className="sm:hidden inline-flex items-center px-3 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 text-xs font-semibold rounded-lg active:scale-95 transition-all duration-300 whitespace-nowrap"
                            >
                                Book Now
                            </button>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`lg:hidden p-2 rounded-xl active:scale-95 transition-all duration-200 ${scrolled
                                    ? "text-slate-700 hover:bg-slate-100"
                                    : "text-white hover:bg-white/10"
                                    }`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/40 z-[-1]"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Mobile Menu Panel */}
                <div
                    className={`lg:hidden fixed top-0 right-0 h-full w-[min(320px,85vw)] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    style={{ paddingTop: "env(safe-area-inset-top)" }}
                >
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-9 h-9 object-cover rounded-xl shadow"
                            />
                            <div className="flex flex-col text-left overflow-hidden leading-none">
                                <span className={`font-bold text-sm sm:text-lg leading-none truncate transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-red"}`}>
                                    One Page
                                </span>
                                <span className={`text-[9px] sm:text-[11px] font-semibold tracking-wide uppercase truncate transition-colors duration-300 mt-0.5 ${scrolled ? "text-blue-600" : "text-black-300"}`}>
                                    Tax & Finance Solutions
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 active:scale-95 transition-all"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Nav Links — scrollable */}
                    <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => {
                                    handleNavClick(link.href);
                                    setIsOpen(false);
                                }}
                                className={`flex items-center w-full px-4 py-3.5 rounded-2xl text-base font-semibold text-left transition-all duration-200 ${activeSection === link.href.replace("#", "")
                                    ? "bg-blue-50 text-gold-500"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-gold-500"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="px-4 py-5 border-t border-slate-100 flex flex-col gap-3"
                        style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
                    >
                        <a
                            href="tel:+971501234567"
                            className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
                        >
                            <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                            +971 50 123 4567
                        </a>

                        <button
                            onClick={() => {
                                setIsOpen(false);
                                handleShow();
                            }}
                            className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-300"
                        >
                            Get Consultation
                        </button>
                    </div>
                </div>
            </header>

            <ContactModal show={showModal} handleClose={handleClose} />
        </>
    );
}
