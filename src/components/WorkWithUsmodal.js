import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import {
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
    MessageSquare,
    X,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Consulatation.css";

export default function WorkWithUsModal({ show, handleClose }) {
    const sectionRef = useRef(null);
    const formRef = useRef(null); // ← emailjs reads the real <form> DOM node
    const resumeRef = useRef(null);
    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
    });

    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    // ── Intersection Observer for reveal animations ──
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

    // ── Validation ──
    const validate = () => {
        const newErrors = {};

        if (!form.from_name.trim() || form.from_name.trim().length < 2)
            newErrors.name = "Please enter your full name.";

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.from_email.trim() || !emailRe.test(form.from_email))
            newErrors.email = "Please enter a valid email address.";

        const phoneRe = /^[+\d\s\-()]{7,20}$/;
        if (!form.phone.trim() || !phoneRe.test(form.phone))
            newErrors.phone = "Please enter a valid phone number.";

        if (!form.position)
            newErrors.position = "Please select a position.";

        if (!form.experience.trim())
            newErrors.experience = "Please enter your experience.";

        if (!resume)
            newErrors.resume = "Please upload your resume.";
        else if (resume.size > 5 * 1024 * 1024)
            newErrors.resume = "File size must be under 5MB.";

        if (!form.message.trim() || form.message.trim().length < 10)
            newErrors.message =
                "Please introduce yourself briefly (minimum 10 characters).";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ── Field change handlers ──
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name])
            setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleResumeChange = (e) => {
        const file = e.target.files[0] || null;
        setResume(file);
        if (errors.resume)
            setErrors((prev) => ({ ...prev, resume: undefined }));
    };

    // ── Submit ──
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            const formData = new FormData();

            formData.append("from_name", form.from_name);
            formData.append("from_email", form.from_email);
            formData.append("phone", form.phone);
            formData.append("position", form.position);
            formData.append("experience", form.experience);
            formData.append("message", form.message);
            formData.append("resume", resume);

            const response = await fetch(
                "http://127.0.0.1:8000/apply",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {

                setStatus("success");

                setForm({
                    from_name: "",
                    from_email: "",
                    phone: "",
                    position: "",
                    experience: "",
                    message: "",
                });

                setResume(null);
                if (resumeRef.current) {
                    resumeRef.current.value = "";
                }

                setErrors({});

            } else {

                setStatus("error");
                setErrorMessage(
                    data.error || "Something went wrong."
                );
            }

        } catch (error) {

            console.error(error);

            setStatus("error");
            setErrorMessage(
                error.message || "Server Error"
            );
        }
    };

    // ── Input class helper ──
    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-2xl border text-slate-800 text-sm bg-white/80 backdrop-blur-xl transition-all duration-500 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)] placeholder:text-slate-400 focus:scale-[1.02] focus:-translate-y-[2px] hover:-translate-y-[1px] ${errors[field]
            ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
            : "border-slate-200/70 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
        }`;

    // ── Info cards data ──
    const infoCards = [
        {
            icon: CheckCircle2,
            label: "Career Growth",
            value: "Fast Learning Environment",
            sub: "Grow your skills with real projects",
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
        },
        {
            icon: CheckCircle2,
            label: "Supportive Team",
            value: "Collaborative Culture",
            sub: "Work with experienced professionals",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
        },
        {
            icon: CheckCircle2,
            label: "Global Exposure",
            value: "International Clients",
            sub: "Work on UAE & India projects",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
        },
        {
            icon: CheckCircle2,
            label: "Work Flexibility",
            value: "Modern Workplace",
            sub: "Performance-driven environment",
            color: "text-gold-400",
            bg: "bg-gold-400/10",
        },
    ];

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
                    {/* ── Close Button ── */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* ── Background blobs ── */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/60 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-900/20 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">

                        {/* ── Header ── */}
                        <div className="text-center mb-12 reveal">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-semibold mb-4">
                                <MessageSquare className="w-4 h-4" />
                                Work With Us
                            </div>

                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                                Join Our{" "}
                                <span className="gradient-text">Growing Team</span>
                            </h2>

                            <p className="text-base text-white/60 max-w-2xl mx-auto">
                                We're always looking for talented professionals.
                                Submit your application and our HR team will review your profile.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-10 items-start">

                            {/* ── Left: Info Cards ── */}
                            <div className="lg:col-span-2 flex flex-col gap-4 reveal-left">
                                {infoCards.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.label}
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
                                        </div>
                                    );
                                })}
                            </div>

                            {/* ── Right: Form ── */}
                            <div className="lg:col-span-3 reveal-right">
                                <div className="relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-purple-500/30 shadow-[0_20px_80px_rgba(59,130,246,0.35)] backdrop-blur-xl animate-formGlow">
                                    <div className="relative bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 border border-white/40">

                                        {/*
                                          ⚠️  IMPORTANT: emailjs.sendForm() requires a real
                                          HTML <form> element ref. The `name` attribute on every
                                          field MUST match the variable name in your EmailJS template.
                                        */}
                                        <form
                                            ref={formRef}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            {/* ── Full Name ── */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="from_name"
                                                    value={form.from_name}
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

                                            {/* ── Email & Phone ── */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="from_email"
                                                        value={form.from_email}
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
                                                        Phone Number *
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

                                            {/* ── Experience ── */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Years of Experience *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="experience"
                                                    value={form.experience}
                                                    onChange={handleChange}
                                                    placeholder="e.g. 3 Years"
                                                    className={inputClass("experience")}
                                                />
                                                {errors.experience && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.experience}
                                                    </p>
                                                )}
                                            </div>

                                            {/* ── Position ── */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Position Applying For *
                                                </label>
                                                <select
                                                    name="position"
                                                    value={form.position}
                                                    onChange={handleChange}
                                                    className={`${inputClass("position")} appearance-none`}
                                                >
                                                    <option value="">Select Position</option>
                                                    <option value="Accountant">Accountant</option>
                                                    <option value="Senior Accountant">Senior Accountant</option>
                                                    <option value="Tax Consultant">Tax Consultant</option>
                                                    <option value="GST Specialist">GST Specialist</option>
                                                    <option value="Payroll Executive">Payroll Executive</option>
                                                    <option value="Audit Associate">Audit Associate</option>
                                                    <option value="Business Development Executive">
                                                        Business Development Executive
                                                    </option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {errors.position && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.position}
                                                    </p>
                                                )}
                                            </div>


                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Resume *
                                                </label>
                                                <input
                                                    ref={resumeRef}
                                                    type="file"
                                                    name="my_file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleResumeChange}
                                                    className={inputClass("resume")}
                                                />
                                                <p className="text-xs text-slate-500 mt-1">
                                                    Upload PDF, DOC or DOCX (Max 5MB)
                                                </p>
                                                {resume && (
                                                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                                                        <CheckCircle2 className="w-3 h-3" />
                                                        {resume.name}
                                                    </p>
                                                )}
                                                {errors.resume && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.resume}
                                                    </p>
                                                )}
                                            </div>

                                            {/* ── Message ── */}
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                                    Message *
                                                </label>
                                                <textarea
                                                    rows="3"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us about your experience, skills and why you'd like to join our team..."
                                                    className={inputClass("message")}
                                                />
                                                {errors.message && (
                                                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* ── Status Messages ── */}
                                            {status === "success" && (
                                                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                                                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                                    Application submitted successfully. Our HR team will
                                                    review your profile and contact you if your experience
                                                    matches our requirements.
                                                </div>
                                            )}

                                            {status === "error" && (
                                                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                    {errorMessage}
                                                </div>
                                            )}

                                            {/* ── Submit Button ── */}
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
                                                        Apply Now
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