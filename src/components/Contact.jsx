import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";

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

export default function Contact() {
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
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (e) =>
                        e.isIntersecting && e.target.classList.add("visible")
                ),
            { threshold: 0.1 }
        );

        sectionRef.current
            ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim() || form.name.trim().length < 2) {
            newErrors.name =
                "Please enter your full name (min 2 characters).";
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.email.trim() || !emailRe.test(form.email)) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        const phoneRe = /^[+\d\s\-()]{7,20}$/;

        if (!form.phone.trim() || !phoneRe.test(form.phone)) {
            newErrors.phone =
                "Please enter a valid phone number.";
        }

        if (!form.service) {
            newErrors.service = "Please select a service.";
        }

        if (
            !form.message.trim() ||
            form.message.trim().length < 10
        ) {
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
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: "bb028c97-1538-4545-a37a-3d1dc94d437b",
                        subject: `New Enquiry: ${form.service} — ${form.name}`,
                        from_name: "FinPro Consultancy Website",
                        replyto: form.email,
                        ...form,
                    }),
                }
            );

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
            } else {
                setStatus("error");

                setErrorMessage(
                    data.message ||
                    "Something went wrong. Please try again."
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
        `w-full px-4 py-3.5 rounded-xl border text-slate-800 text-sm placeholder:text-slate-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${errors[field]
            ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400"
            : "border-slate-200 focus:ring-primary-200 focus:border-primary-400 hover:border-slate-300"
        }`;

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24 bg-slate-900 relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/60 rounded-full blur-3xl" />

                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-900/20 rounded-full blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-4">
                        <MessageSquare className="w-4 h-4" />
                        Contact Us
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                        Get Your Free{" "}
                        <span className="gradient-text">
                            Consultation
                        </span>
                    </h2>

                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Fill in the form below and our expert team
                        will reach out within 2 hours. No obligations,
                        completely free.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Left: Info */}
                    <div className="lg:col-span-2 flex flex-col gap-6 reveal-left">
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
                                sub:
                                    "India: BKC, Mumbai & Connaught Place, Delhi",
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
                                    className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:bg-white/12 transition-all duration-300 group"
                                >
                                    <div
                                        className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                                    >
                                        <Icon
                                            className={`w-5 h-5 ${item.color}`}
                                        />
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

                    <div className="lg:col-span-3 reveal-right">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl">

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
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

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
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

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
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

                                {/* Service */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Select Service
                                    </label>

                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className={inputClass("service")}
                                    >
                                        <option value="">
                                            Choose a service
                                        </option>

                                        {services.map((service) => (
                                            <option
                                                key={service}
                                                value={service}
                                            >
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
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message
                                    </label>

                                    <textarea
                                        rows="5"
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

                                {/* Success */}
                                {status === "success" && (
                                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Message sent successfully.
                                    </div>
                                )}

                                {/* Error */}
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
                                    className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-500
                    text-white
                    font-semibold
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    disabled:opacity-70
                "
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
        </section>
    );
}