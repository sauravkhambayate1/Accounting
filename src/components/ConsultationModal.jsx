import React, { useState } from 'react';
import './Consulatation.css';
import {
    Send,
    Loader2,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';

const services = [
    'Tax Filing & Returns',
    'GST Services',
    'Bookkeeping',
    'Payroll Services',
    'Audit Services',
    'Company Registration',
    'Financial Consulting',
    'UAE VAT / Corporate Tax',
    'Other',
];

export default function ConsultationModal() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState('idle');

    const [errorMessage, setErrorMessage] =
        useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('loading');

        try {
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        access_key:
                            'YOUR_WEB3FORMS_ACCESS_KEY',

                        subject:
                            'New Client Consultation Request',

                        from_name:
                            'One Page Tax & Finance Solutions',

                        ...form,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                setStatus('success');

                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                });

                setTimeout(() => {
                    setStatus('idle');
                }, 3000);
            } else {
                setStatus('error');

                setErrorMessage(
                    'Something went wrong.'
                );
            }
        } catch {
            setStatus('error');

            setErrorMessage(
                'Network error. Please try again.'
            );
        }
    };

    return (
        <div
            className="modal fade"
            id="consultationModal"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div
                    className="
            modal-content
            border-0
            rounded-4
            overflow-hidden
            bg-transparent
          "
                >
                    <div
                        className="
              relative
              bg-gradient-to-br
              from-slate-900
              via-blue-950
              to-slate-950
              p-0
            "
                    >
                        {/* Close */}
                        <button
                            type="button"
                            className="
                btn-close
                btn-close-white
                position-absolute
                top-0
                end-0
                m-4
                z-3
              "
                            data-bs-dismiss="modal"
                        />

                        {/* Glow */}
                        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10 p-5 p-md-5">

                            {/* Header */}
                            <div className="text-center mb-5">
                                <div
                                    className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    border
                    border-white/10
                    text-warning
                    fw-semibold
                    mb-4
                  "
                                >
                                    Free Consultation
                                </div>

                                <h2 className="text-white fw-bold display-5 mb-3">
                                    Let's Grow Your Business
                                </h2>

                                <p className="text-white-50 fs-5">
                                    Fill out the form and our experts
                                    will contact you shortly.
                                </p>
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="row g-4"
                            >
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="
                      form-control
                      bg-white bg-opacity-10
                      border border-white border-opacity-10
                      text-white
                      rounded-4
                      px-4
                      py-3
                      custom-input
                    "
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="
                      form-control
                      bg-white bg-opacity-10
                      border border-white border-opacity-10
                      text-white
                      rounded-4
                      px-4
                      py-3
                      custom-input
                    "
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                        className="
                      form-control
                      bg-white bg-opacity-10
                      border border-white border-opacity-10
                      text-white
                      rounded-4
                      px-4
                      py-3
                      custom-input
                    "
                                    />
                                </div>

                                <div className="col-md-6">
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        required
                                        className="
                      form-select
                      bg-white bg-opacity-10
                      border border-white border-opacity-10
                      text-white
                      rounded-4
                      px-4
                      py-3
                      custom-input
                    "
                                    >
                                        <option value="">
                                            Select Service
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
                                </div>

                                <div className="col-12">
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                        required
                                        className="
                      form-control
                      bg-white bg-opacity-10
                      border border-white border-opacity-10
                      text-white
                      rounded-4
                      px-4
                      py-3
                      custom-input
                    "
                                    />
                                </div>

                                {/* Success */}
                                {status === 'success' && (
                                    <div className="col-12">
                                        <div className="alert alert-success rounded-4 border-0 d-flex align-items-center gap-2">
                                            <CheckCircle2 size={18} />
                                            Enquiry submitted successfully.
                                        </div>
                                    </div>
                                )}

                                {/* Error */}
                                {status === 'error' && (
                                    <div className="col-12">
                                        <div className="alert alert-danger rounded-4 border-0 d-flex align-items-center gap-2">
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </div>
                                    </div>
                                )}

                                {/* Button */}
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="
                      w-100
                      border-0
                      rounded-4
                      py-3
                      fw-bold
                      text-dark
                      consultation-btn
                    "
                                    >
                                        {status === 'loading' ? (
                                            <span className="d-flex align-items-center justify-content-center gap-2">
                                                <Loader2
                                                    size={18}
                                                    className="animate-spin"
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="d-flex align-items-center justify-content-center gap-2">
                                                <Send size={18} />
                                                Get Free Consultation
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}