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
        name: "Mahaveer Bastawade",
        role: "BNI Vishwa, Urban Home Decor",
        company: "18th March, 2026",
        avatar:
            "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "I have been working with One Page Tax Solutions for over Three years... Their expertise has transformed how I manage taxes for my Business. They streamlined my compliance processes, uncovered deductions I overlooked, & saved me significant amounts on liabilities—turning complex filings into a stress-free experience.",
        service: "Business Taxation & Compliance",
    },

    {
        name: "Vaibhav Jadhav",
        role: "BNI Vishwa, Vaibhav B Jadhav",
        company: "29th January, 2025",
        avatar:
            "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        text: "One page tax solution is one of the best tax consultancy in sangli. The team is very good for follow up..",
        service: "Tax Consultancy",
    },

    {
        name: "Vijay Kulkarni",
        role: "BNI Vishwa, Magic Flairs",
        company: "17th January, 2025",
        avatar:
            "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 5,
        text: "Very good service, very good, dedicated team, helpful nature. Modern approach. Thank you.",
        service: "Accounting & Advisory",
    },

    {
        name: "Akshay Kolap",
        role: "BNI Vishwa, JK Paper Bags",
        company: "15th November, 2024",
        avatar:
            "https://randomuser.me/api/portraits/men/60.jpg",
        rating: 5,
        text: 'I highly recommend "one page tax solutions" For business forecasting, planning, goal setting and accounting and much more. Thank you rahul sir',
        service: "Business Planning & Accounting",
    },

    {
        name: "Nitin Chougule",
        role: "BNI Vishwa, Bassappa foods/Bassappa Halwai",
        company: "22nd March, 2024",
        avatar:
            "https://randomuser.me/api/portraits/men/70.jpg",
        rating: 5,
        text: "WE BASSAPPA FOODS RECOMMEND ONE PAGE TAX SOLUTION FOR THERE PROMPT SERVICE PROPER GUIDANCE TRANSPERENCY FUTURE FINANCIAL GOALS N VISION SETTING PROPER SOP FOR VARIOUS FIRMS N CO.",
        service: "Financial Guidance & SOP Setup",
    },

    {
        name: "Jayjeet Paritkar",
        role: "BNI Vishwa, Jsons Engineers",
        company: "16th June, 2023",
        avatar:
            "https://randomuser.me/api/portraits/men/80.jpg",
        rating: 5,
        text: "Dear Rahul sir, One page tax solution is very informative for all of us. Also I am very thankful for all your services. Best rgds",
        service: "Tax & Financial Services",
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
            className="py-15 bg-slate-50 relative overflow-hidden"
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