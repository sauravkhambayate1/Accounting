import { ArrowRight, CheckCircle2, Star, TrendingUp, Shield, Award, Landmark, Globe, Phone } from 'lucide-react';
import logo from "../assets/Logo.jpeg";
import { useNavigate } from 'react-router-dom';
import ContactModal from "./ConsultationModal";
import { useState } from 'react';
const stats = [
    { value: '1,200+', label: 'Happy Clients' },
    { value: '18+', label: 'Years Experience' },
    { value: '99%', label: 'Client Retention' },
    { value: '50+', label: 'Expert CAs' },
];

const highlights = [
    'Tax Filing & GST Returns',
    'Audit & Compliance',
    'Company Registration',
];

const serviceOptions = [
    {
        id: 'indian',
        label: 'Indian Corporate',
        icon: Landmark,
        color: 'from-orange-500 to-red-600',
        bgColor: 'bg-orange-500/20',
        textColor: 'text-orange-400',
    },
    {
        id: 'global',
        label: 'Global Corporate',
        icon: Globe,
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-emerald-500/20',
        textColor: 'text-emerald-400',
    },
];

export default function Hero() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);

    const handleClose = () => setShowModal(false);
    return (
        <section
            id="home"
            className="hero-bg min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Logo Section */}
            <div className="absolute top-0 left-0 w-full z-50 pt-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

                    {/* Left Side - Logo */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 group focus:outline-none"
                    >
                        <img
                            src={logo}
                            alt="One Page Tax & Finance Solutions"
                            className="w-11 h-11 sm:w-14 sm:h-14 object-cover rounded-2xl shadow-lg border border-white/20 group-hover:scale-105 transition-all duration-300"
                        />

                        <span className="font-display font-bold text-sm sm:text-xl lg:text-2xl text-white tracking-wide leading-tight">
                            One Page
                            <span className="text-gold-400 block sm:inline sm:ml-1">
                                Tax and Finance solutions
                            </span>
                        </span>
                    </button>

                    {/* Right Side */}
                    <div className="flex items-center gap-3 sm:gap-5">

                        {/* Contact Number */}
                        <a
                            href="tel:+919876543210"
                            className="hidden sm:flex items-center gap-2 text-white hover:text-gold-400 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                                <Phone className="w-4 h-4" />
                            </div>

                            <span className="font-semibold text-sm lg:text-base">
                                +91 98765 43210
                            </span>
                        </a>

                        {/* Consultation Button */}
                        <button onClick={handleShow}
                            className="bg-gold-400 hover:bg-gold-500 text-black font-semibold px-4 sm:px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                        >
                            Get Consultation
                        </button>

                    </div>
                </div>

                {/* Mobile Contact */}
                <div className="sm:hidden flex justify-end mt-3">
                    <a
                        href="tel:+919876543210"
                        className="flex items-center gap-2 text-white hover:text-gold-400 transition-all duration-300"
                    >
                        <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                            <Phone className="w-4 h-4" />
                        </div>

                        <span className="font-medium text-sm">
                            +91 98765 43210
                        </span>
                    </a>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

            <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />

            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary-800/30 to-transparent pointer-events-none" />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="animate-fade-up">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-8 shimmer-bg">
                            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />

                            <span>
                                From best practices to Next practices
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-white leading-[1.1] mb-6">
                            We handle the numbers,
                            <span className="gradient-text">
                                You grow the business
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                            Expert accounting, taxation, GST compliance,
                            and business advisory services. We help
                            businesses across UAE and India achieve
                            financial clarity and growth.
                        </p>

                        {/* Highlights */}
                        <ul className="flex flex-col gap-2.5 mb-10">

                            {highlights.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-white/80 text-sm font-medium"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0" />

                                    {item}
                                </li>
                            ))}

                        </ul>

                        {/* Service Buttons */}
                        <div className="grid sm:grid-cols-3 gap-2 max-w-3xl mx-auto">

                            {serviceOptions.map((option, i) => {
                                const Icon = option.icon;

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => {
                                            if (option.id === 'global') {
                                                navigate('/global-corporate');
                                            }

                                            if (option.id === 'indian') {
                                                navigate('/indian-corporate');
                                            }
                                        }}
                                        className="group relative overflow-hidden rounded-2xl p-4 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer transform"
                                        style={{
                                            animation: `fadeUp 0.6s ease-out ${0.2 + i * 0.1}s both`,
                                        }}
                                    >

                                        {/* Background */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                        />

                                        {/* Border */}
                                        <div
                                            className={`absolute inset-0 ${option.bgColor} border border-white/20 rounded-2xl group-hover:border-white/40 transition-all duration-500`}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center gap-3">

                                            <div
                                                className={`w-12 h-12 rounded-xl ${option.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <Icon className={`w-6 h-6 ${option.textColor}`} />
                                            </div>

                                            <div className="flex items-center gap-2">

                                                <h3 className="font-bold text-white text-sm leading-snug text-center">
                                                    {option.label}
                                                </h3>

                                                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />

                                            </div>
                                        </div>

                                        {/* Shine */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
                                        </div>

                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        className="hidden lg:flex justify-center items-center relative animate-fade-up"
                        style={{
                            animationDelay: '0.2s',
                        }}
                    >

                        <div className="relative w-full max-w-md">

                            {/* Main Card */}
                            <div className="glass-card rounded-3xl p-8 animate-float">

                                <div className="flex items-center justify-between mb-6">

                                    <div>
                                        <p className="text-white/60 text-sm">
                                            Annual Revenue Growth
                                        </p>

                                        <p className="text-white text-3xl font-bold mt-1">
                                            +34.8%
                                        </p>
                                    </div>

                                    <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                                    </div>

                                </div>

                                {/* Chart */}
                                <div className="flex items-end gap-2 h-24 mb-6">

                                    {[40, 65, 50, 80, 70, 90, 85, 100].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 rounded-t-md transition-all duration-500"
                                            style={{
                                                height: `${h}%`,
                                                background:
                                                    i === 7
                                                        ? 'linear-gradient(to top, #f59e0b, #fbbf24)'
                                                        : `rgba(59, 130, 246, ${0.2 + i * 0.08})`,
                                            }}
                                        />
                                    ))}

                                </div>

                                <div className="flex items-center justify-between text-white/50 text-xs">
                                    <span>Jan</span>
                                    <span>Mar</span>
                                    <span>May</span>
                                    <span>Jul</span>
                                </div>

                            </div>

                            {/* Floating Badge 1 */}
                            <div
                                className="absolute -top-6 -right-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
                                style={{
                                    animationDelay: '1s',
                                }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-gold-400" />
                                </div>

                                <div>
                                    <p className="text-white text-sm font-semibold">
                                        ISO Certified
                                    </p>

                                    <p className="text-white/50 text-xs">
                                        Quality Assured
                                    </p>
                                </div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div
                                className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
                                style={{
                                    animationDelay: '2s',
                                }}
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-emerald-400" />
                                </div>

                                <div>
                                    <p className="text-white text-sm font-semibold">
                                        Your Entire Financial World
                                    </p>

                                    <p className="text-white/50 text-xs">
                                        Simplified on One Page
                                    </p>
                                </div>
                            </div>

                            {/* Background Image */}
                            <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
                                <img
                                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Professional team"
                                    className="w-full h-full object-cover opacity-20 scale-110"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Choose Service */}
                <div className="mt-20 mb-12">
                    <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-6 text-center">
                        Choose your service
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className="glass-card rounded-2xl px-6 py-5 text-center hover:bg-white/12 transition-all duration-300"
                            style={{
                                animationDelay: `${i * 0.1}s`,
                            }}
                        >
                            <p className="text-3xl font-bold text-white mb-1">
                                {stat.value}
                            </p>

                            <p className="text-white/60 text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 60"
                    className="w-full"
                    preserveAspectRatio="none"
                    height="60"
                >
                    <path
                        d="M0,60 L0,30 Q180,0 360,20 Q540,40 720,25 Q900,10 1080,30 Q1260,50 1440,20 L1440,60 Z"
                        fill="white"
                    />
                </svg>
            </div>

            <ContactModal
                show={showModal}
                handleClose={handleClose}
            />
        </section>
    );
}