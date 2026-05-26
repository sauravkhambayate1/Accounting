import {
    useEffect,
    useRef,
    useState,
    useCallback,
} from "react";

import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    Building2,
} from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Mehta",
        role: "CEO, TechVenture Pvt Ltd",
        company: "Mumbai, India",
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5,
        text: "FinPro has been our trusted accounting partner for 5 years. Their GST compliance work is exceptional, and the team is always available when we need them. They saved us over ₹15 lakhs in tax this year alone!",
        service: "GST Services & Tax Planning",
    },

    {
        name: "Sarah Al-Rashid",
        role: "Managing Director, Al-Rashid Trading LLC",
        company: "Dubai, UAE",
        avatar:
            "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5,
        text: "Setting up our company in UAE was seamless with FinPro. They handled everything from VAT registration to ongoing compliance. Their Dubai team is highly professional and responsive.",
        service: "Company Registration & VAT",
    },

    {
        name: "Amit Sharma",
        role: "Founder, GreenLeaf Exports",
        company: "Delhi, India",
        avatar:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5,
        text: "The bookkeeping and payroll services are a lifesaver for our 80-person team. Reports are always ready on time, and the dedicated manager knows our business inside out.",
        service: "Bookkeeping & Payroll",
    },

    {
        name: "Priya Krishnan",
        role: "CFO, MedCare Hospitals",
        company: "Bangalore, India",
        avatar:
            "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5,
        text: "FinPro's audit team is thorough, professional, and communicative. The internal audit they conducted helped us identify process gaps that saved us significant costs. Highly recommended.",
        service: "Audit Services",
    },

    {
        name: "Mohammed Al-Farsi",
        role: "Owner, Al-Farsi Construction",
        company: "Abu Dhabi, UAE",
        avatar:
            "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5,
        text: "I was struggling with financial management until I found FinPro. Their financial consulting helped us restructure our business finances and we grew 40% in revenue the following year.",
        service: "Financial Consulting",
    },

    {
        name: "Anita Patel",
        role: "Director, Fashion Hub India",
        company: "Ahmedabad, India",
        avatar:
            "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150",
        rating: 5,
        text: "Switched from our previous CA firm to FinPro 2 years ago. Best decision we made. Their pricing is fair, their service is exceptional, and they always go above and beyond.",
        service: "Tax Filing & Bookkeeping",
    },
];

export default function Testimonials() {

    const sectionRef = useRef(null);

    const [active, setActive] = useState(0);

    const [animating, setAnimating] =
        useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "visible"
                        );
                    }
                });

            },
            {
                threshold: 0.1,
            }
        );

        const elements =
            sectionRef.current?.querySelectorAll(
                ".reveal"
            );

        elements?.forEach((el) =>
            observer.observe(el)
        );

        return () => observer.disconnect();

    }, []);

    const navigateTestimonials = useCallback(
        (direction) => {

            if (animating) return;

            setAnimating(true);

            setTimeout(() => {

                setActive((prev) =>
                    direction === "next"
                        ? (prev + 1) %
                        testimonials.length
                        : (prev - 1 +
                            testimonials.length) %
                        testimonials.length
                );

                setAnimating(false);

            }, 300);
        },
        [animating]
    );

    useEffect(() => {

        const interval = setInterval(() => {
            navigateTestimonials("next");
        }, 5000);

        return () => clearInterval(interval);

    }, [navigateTestimonials]);

    const currentTestimonial =
        testimonials[active];

    return (

        <section
            id="testimonials"
            ref={sectionRef}
            className="py-24 bg-slate-50 relative overflow-hidden"
        >

            {/* Background Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header */}
                <div className="text-center mb-16 reveal">

                    <span className="section-tag">

                        <Star className="w-4 h-4 fill-current" />

                        Client Stories

                    </span>

                    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5">

                        What Our Clients{" "}

                        <span className="gradient-text-blue">
                            Say
                        </span>

                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">

                        Don't take our word for it —
                        hear from 1,200+ businesses
                        who've experienced the
                        FinPro difference.

                    </p>

                </div>

                {/* Featured Card */}
                <div className="reveal max-w-4xl mx-auto mb-12">

                    <div
                        className={`bg-white rounded-3xl shadow-card-hover border border-slate-100 p-8 md:p-10 transition-all duration-300 ${animating
                            ? "opacity-0 scale-98"
                            : "opacity-100 scale-100"
                            }`}
                    >

                        <div className="flex flex-col md:flex-row gap-8 items-start">

                            {/* Left */}
                            <div className="flex-shrink-0 flex flex-col items-center gap-3 md:w-48 text-center">

                                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-primary-100">

                                    <img
                                        src={
                                            currentTestimonial.avatar
                                        }
                                        alt={
                                            currentTestimonial.name
                                        }
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <div>

                                    <p className="font-bold text-slate-900 text-sm">
                                        {
                                            currentTestimonial.name
                                        }
                                    </p>

                                    <p className="text-slate-500 text-xs mt-0.5 leading-tight">
                                        {
                                            currentTestimonial.role
                                        }
                                    </p>

                                    <div className="flex items-center gap-1 justify-center mt-1.5">

                                        <Building2 className="w-3 h-3 text-slate-400" />

                                        <p className="text-slate-400 text-xs">
                                            {
                                                currentTestimonial.company
                                            }
                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-0.5">

                                    {Array.from({
                                        length:
                                            currentTestimonial.rating,
                                    }).map((_, i) => (

                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-gold-400 text-gold-400"
                                        />

                                    ))}

                                </div>

                                <div className="bg-primary-50 text-primary-600 text-[10px] font-semibold px-3 py-1.5 rounded-full text-center leading-tight">

                                    {
                                        currentTestimonial.service
                                    }

                                </div>

                            </div>

                            {/* Right */}
                            <div className="flex-1">

                                <Quote className="w-10 h-10 text-primary-200 mb-4" />

                                <p className="text-slate-700 text-lg leading-relaxed font-medium italic">

                                    "
                                    {
                                        currentTestimonial.text
                                    }
                                    "

                                </p>

                            </div>

                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">

                            {/* Dots */}
                            <div className="flex gap-2">

                                {testimonials.map((_, i) => (

                                    <button
                                        key={i}
                                        onClick={() => {

                                            if (
                                                !animating
                                            ) {

                                                setAnimating(
                                                    true
                                                );

                                                setTimeout(() => {

                                                    setActive(
                                                        i
                                                    );

                                                    setAnimating(
                                                        false
                                                    );

                                                }, 300);
                                            }
                                        }}
                                        className={`rounded-full transition-all duration-300 ${i === active
                                            ? "w-6 h-2.5 bg-primary-600"
                                            : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                                            }`}
                                    />

                                ))}

                            </div>

                            {/* Arrows */}
                            <div className="flex gap-2">

                                <button
                                    onClick={() =>
                                        navigateTestimonials(
                                            "prev"
                                        )
                                    }
                                    className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                                >

                                    <ChevronLeft className="w-5 h-5 text-slate-600" />

                                </button>

                                <button
                                    onClick={() =>
                                        navigateTestimonials(
                                            "next"
                                        )
                                    }
                                    className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                                >

                                    <ChevronRight className="w-5 h-5 text-slate-600" />

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Mini Cards */}
                <div className="grid sm:grid-cols-3 gap-4 reveal">

                    {testimonials
                        .filter(
                            (_, i) => i !== active
                        )
                        .slice(0, 3)
                        .map((testimonial) => (

                            <div
                                key={testimonial.name}
                                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                            >

                                <div className="flex gap-0.5 mb-3">

                                    {Array.from({
                                        length: 5,
                                    }).map((_, i) => (

                                        <Star
                                            key={i}
                                            className="w-3.5 h-3.5 fill-gold-400 text-gold-400"
                                        />

                                    ))}

                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">

                                    "
                                    {
                                        testimonial.text
                                    }
                                    "

                                </p>

                                <div className="flex items-center gap-2.5">

                                    <img
                                        src={
                                            testimonial.avatar
                                        }
                                        alt={
                                            testimonial.name
                                        }
                                        className="w-8 h-8 rounded-lg object-cover"
                                    />

                                    <div>

                                        <p className="text-slate-900 text-sm font-semibold leading-tight">
                                            {
                                                testimonial.name
                                            }
                                        </p>

                                        <p className="text-slate-400 text-xs">
                                            {
                                                testimonial.company
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                </div>

            </div>

        </section>
    );
}