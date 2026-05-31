import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Menu,
    X,
    Phone,
} from "lucide-react";

import logo from "../assets/Logo.jpeg";
import ContactModal from "./ConsultationModal";

const navLinks = [
    { label: "Home", href: "/" },
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
    const [activeSection, setActiveSection] =
        useState("home");

    const handleShow = () => setShowModal(true);

    const handleClose = () => setShowModal(false);
    const navigate = useNavigate();
    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) =>
                link.href.replace("#", "")
            );

            for (
                let i = sections.length - 1;
                i >= 0;
                i--
            ) {

                const el = document.getElementById(
                    sections[i]
                );

                if (
                    el &&
                    window.scrollY >= el.offsetTop - 120
                ) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    const handleNavClick = (href) => {

        setIsOpen(false);

        // Navigate Home without reload
        if (href === "/") {
            navigate("/");
            return;
        }

        // Scroll for other sections
        const id = href.replace("#", "");

        const el = document.getElementById(id);

        if (el) {

            const offset = 80;

            const top =
                el.getBoundingClientRect().top +
                window.scrollY -
                offset;

            window.scrollTo({
                top,
                behavior: "smooth",
            });

            setActiveSection(id);
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.1)] py-2 sm:py-3"
                    : "bg-transparent py-3 sm:py-5"
                    }`}
            >

                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <button
                            onClick={() =>
                                handleNavClick("/")
                            }
                            className="flex items-center gap-2 sm:gap-3 group min-w-0"
                        >

                            <div className="relative flex-shrink-0">

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

                            </div>

                            <div className="flex flex-col text-left overflow-hidden">

                                <span
                                    className={`font-bold text-sm sm:text-lg leading-tight truncate transition-colors duration-300 ${scrolled
                                        ? "text-slate-900"
                                        : "text-white"
                                        }`}
                                >
                                    One Page
                                </span>

                                <span
                                    className={`text-[9px] sm:text-[11px] font-semibold tracking-wide uppercase truncate transition-colors duration-300 ${scrolled
                                        ? "text-blue-600"
                                        : "text-blue-200"
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
                                    onClick={() =>
                                        handleNavClick(link.href)
                                    }
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${scrolled
                                        ? activeSection ===
                                            link.href.replace("#", "")
                                            ? "text-primary-600"
                                            : "text-slate-600 hover:text-primary-600 hover:bg-primary-50"
                                        : activeSection ===
                                            link.href.replace("#", "")
                                            ? "text-gold-300"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                        }`}
                                >

                                    {link.label}

                                    <span
                                        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${activeSection ===
                                            link.href.replace("#", "")
                                            ? "w-4 bg-gold-400"
                                            : "w-0 group-hover:w-4 bg-gold-400"
                                            }`}
                                    />

                                </button>

                            ))}

                        </nav>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-2 sm:gap-3">

                            {/* CTA */}
                            <button
                                onClick={handleShow}
                                className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 text-sm font-semibold rounded-xl hover:shadow-gold-glow hover:-translate-y-0.5 active:scale-95 transition-all duration-300 whitespace-nowrap"
                            >
                                Get Consultation
                            </button>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() =>
                                    setIsOpen(!isOpen)
                                }
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

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
                        ? "max-h-screen opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                        }`}
                >

                    <div className="bg-white/98 backdrop-blur-xl border-t border-slate-100 px-4 py-5 shadow-xl min-h-[calc(100vh-72px)] overflow-y-auto">

                        <nav className="flex flex-col gap-2">

                            {navLinks.map((link) => (

                                <button
                                    key={link.href}
                                    onClick={() => {
                                        handleNavClick(link.href);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center px-4 py-4 rounded-2xl text-base font-semibold text-left active:scale-[0.98] transition-all duration-200 ${activeSection ===
                                        link.href.replace("#", "")
                                        ? "bg-primary-50 text-primary-600"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-primary-600"
                                        }`}
                                >

                                    {link.label}

                                </button>

                            ))}

                        </nav>

                        {/* Mobile Footer */}
                        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">

                            <a
                                href="tel:+971501234567"
                                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 text-slate-700 text-sm font-medium"
                            >

                                <Phone className="w-4 h-4 text-primary-500" />

                                +971 50 123 4567

                            </a>

                            <button
                                onClick={handleShow}
                                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-300"
                            >
                                Get Consultation
                            </button>

                        </div>

                    </div>
                </div>

                <ContactModal
                    show={showModal}
                    handleClose={handleClose}
                />

            </header>
        </>
    );
}