import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
    Clock,
    MessageSquare,
    X,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Consulatation.css";

const services = [
    "Tax Filing & Returns",
    "GST Services",
    "Bookkeeping",
    "Payroll Services",
    "Audit Services",
    "Company Registration",
    "Financial Consulting",
    "UAE VAT / Corporate Tax",
    "Other",
];

export default function ConsultationModal({ show, handleClose }) {
    const sectionRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!show || !sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) => e.isIntersecting && e.target.classList.add("visible")
                ),
            { threshold: 0.1 }
        );

        sectionRef.current
            ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [show]);

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim() || form.name.trim().length < 2) {
            newErrors.name = "Please enter your full name.";
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.email.trim() || !emailRe.test(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        const phoneRe = /^[+\d\s\-()]{7,20}$/;

        if (!form.phone.trim() || !phoneRe.test(form.phone)) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        if (!form.service) {
            newErrors.service = "Please select a service.";
        }

        if (!form.message.trim() || form.message.trim().length < 10) {
            newErrors.message =
                "Please describe your requirements (min 10 characters).";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "bb028c97-1538-4545-a37a-3d1dc94d437b",
                    subject: `New Enquiry: ${form.service} — ${form.name}`,
                    from_name: "One Page Tax and Finance Solutions",
                    replyto: form.email,
                    ...form,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");

                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });

                setTimeout(() => {
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("error");

                setErrorMessage(
                    data.message || "Something went wrong. Please try again."
                );
            }
        } catch {
            setStatus("error");

            setErrorMessage(
                "Network error. Please check your connection and try again."
            );
        }
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-2xl border text-slate-800 text-sm bg-white/80 backdrop-blur-xl transition-all duration-500 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)] placeholder:text-slate-400 focus:scale-[1.02] focus:-translate-y-[2px] hover:-translate-y-[1px]
    
    ${errors[field]
            ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
            : "border-slate-200/70 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
        }`;

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            centered
            contentClassName="advanced-modal-content"
        >
            <Modal.Body className="p-0">
                <div
                    id="contact"
                    ref={sectionRef}
                    className="py-16 bg-slate-900 relative overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/60 rounded-full blur-3xl" />

                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-900/20 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                        {/* Header */}
                        <div className="text-center mb-12 reveal">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-4">
                                <MessageSquare className="w-4 h-4" />
                                Contact Us
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                Get Your{" "}
                                <span className="gradient-text">Consultation</span>
                            </h2>

                            <p className="text-base text-white/60 max-w-2xl mx-auto">
                                Fill in the form below and our expert team will reach out within
                                2 hours.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-10 items-start">
                            {/* Left: Info */}
                            <div className="lg:col-span-2 flex flex-col gap-4 reveal-left">
                                {[
                                    {
                                        icon: Phone,
                                        label: "Call Us",
                                        value: "+971 50 123 4567",
                                        sub: "+91 98765 43210",
                                        color: "text-emerald-400",
                                        bg: "bg-emerald-400/10",
                                        href: "tel:+971501234567",
                                    },
                                    {
                                        icon: Mail,
                                        label: "Email Us",
                                        value: "info@finproconsultancy.com",
                                        sub: "support@finproconsultancy.com",
                                        color: "text-blue-400",
                                        bg: "bg-blue-400/10",
                                        href: "mailto:info@finproconsultancy.com",
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Our Offices",
                                        value: "Dubai: Business Bay, UAE",
                                        sub: "India: BKC, Mumbai & Connaught Place",
                                        color: "text-rose-400",
                                        bg: "bg-rose-400/10",
                                        href: "#",
                                    },
                                    {
                                        icon: Clock,
                                        label: "Working Hours",
                                        value: "Mon–Sat: 9AM – 7PM IST",
                                        sub: "UAE: Mon–Fri: 9AM – 6PM GST",
                                        color: "text-gold-400",
                                        bg: "bg-gold-400/10",
                                        href: "#",
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="glass-card rounded-2xl p-4 flex items-start gap-4 hover:bg-white/12 transition-all duration-300 group"
                                        >
                                            <div
                                                className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                                            >
                                                <Icon className={`w-5 h-5 ${item.color}`} />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-xs font-medium mb-0.5 uppercase tracking-wider">
                                                    {item.label}
                                                </p>
                                                <p className="text-white text-sm font-semibold">
                                                    {item.value}
                                                </p>
                                                <p className="text-white/50 text-xs mt-0.5">
                                                    {item.sub}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Right: Form */}
                            <div className="lg:col-span-3 reveal-right">
                                <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-purple-500/30 shadow-[0_20px_80px_rgba(59,130,246,0.35)] backdrop-blur-xl animate-formGlow">
                                    <div className="relative bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border border-white/40">
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className={inputClass("name")}
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Email & Phone Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        placeholder="Enter your email"
                                                        className={inputClass("email")}
                                                    />
                                                    {errors.email && (
                                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                            <AlertCircle className="w-3 h-3" />
                                                            {errors.email}
                                                        </p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="Enter phone number"
                                                        className={inputClass("phone")}
                                                    />
                                                    {errors.phone && (
                                                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                            <AlertCircle className="w-3 h-3" />
                                                            {errors.phone}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Service */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Select Service
                                                </label>
                                                <select
                                                    name="service"
                                                    value={form.service}
                                                    onChange={handleChange}
                                                    className={`${inputClass("service")} appearance-none cursor-pointer`}
                                                >
                                                    <option value="">Choose a service</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.service && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.service}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Message
                                                </label>
                                                <textarea
                                                    rows="3"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us about your requirements..."
                                                    className={inputClass("message")}
                                                />
                                                {errors.message && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Status Messages */}
                                            {status === "success" && (
                                                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                    Message sent successfully.
                                                </div>
                                            )}

                                            {status === "error" && (
                                                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errorMessage}
                                                </div>
                                            )}

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
                                            >
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}