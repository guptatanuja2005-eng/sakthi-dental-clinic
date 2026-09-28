import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-semibold uppercase tracking-wider text-purple-600">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            We Would Love to
            <span className="block text-purple-600">
              Hear From You
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question or want to schedule a dental consultation?
            Get in touch with Sakthi Dental Clinic today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <p className="font-semibold uppercase tracking-wider text-purple-600">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Visit Sakthi Dental Clinic
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Our team is here to help you with your dental care needs.
              Contact us to learn more about our treatments or to fix an
              appointment.
            </p>

            <div className="mt-8 space-y-5">
              {/* Address */}
              <div className="flex gap-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Clinic Address</h3>
                  <p className="mt-1 leading-6 text-gray-600">
                    B2/8, SBM Layout, Anthivadi,
                    <br />
                    Hosur, Tamil Nadu 635109, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Mail size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a
                    href="mailto:info@sakthidentalclinic.in"
                    className="mt-1 block text-gray-600 transition hover:text-purple-600"
                  >
                    info@sakthidentalclinic.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Phone size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>

                  <a
                    href="tel:+919862890897"
                    className="mt-1 block text-gray-600 transition hover:text-purple-600"
                  >
                    +91 9862890897
                  </a>

                  <a
                    href="tel:+919363298118"
                    className="block text-gray-600 transition hover:text-purple-600"
                  >
                    +91 9363298118
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Clock size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Contact Hours
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Sunday – Saturday
                    <br />
                    9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-xl md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Fix an Appointment
            </h2>

            <p className="mt-2 text-gray-600">
              Fill out the form and our team will get in touch with you.
            </p>

            {submitted && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                <CheckCircle className="mt-0.5 shrink-0" size={20} />

                <p className="text-sm font-medium">
                  Thank you! Your request has been submitted successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border px-4 py-3.5 outline-none transition focus:ring-2 focus:ring-purple-200 ${
                    errors.name
                      ? "border-red-400"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-3.5 outline-none transition focus:ring-2 focus:ring-purple-200 ${
                    errors.email
                      ? "border-red-400"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Phone <span className="text-red-500">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className={`w-full rounded-xl border px-4 py-3.5 outline-none transition focus:ring-2 focus:ring-purple-200 ${
                    errors.phone
                      ? "border-red-400"
                      : "border-gray-200 focus:border-purple-500"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-gray-800"
                >
                  Message{" "}
                  <span className="font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl"
              >
                <Send size={19} />
                Send Appointment Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gray-900 px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Need Dental Care?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            We're ready to help you and your family take the next step
            towards better oral health.
          </p>

          <a
            href="tel:+919862890897"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 font-semibold transition hover:bg-purple-500"
          >
            <Phone size={19} />
            Call the Clinic
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;