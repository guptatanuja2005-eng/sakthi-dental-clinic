import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Clinic Info */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-2xl shadow-lg">
                🦷
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  Sakthi Dental Clinic
                </h2>

                <p className="text-xs text-gray-400">
                  Compassionate Dental Care
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-gray-400">
              Specialized dental care for women, children and families,
              delivered with compassion, expertise and modern technology.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-purple-600 hover:text-white"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-purple-600 hover:text-white"
              >
                <FaFacebook size={19} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition hover:bg-purple-600 hover:text-white"
              >
                <FaYoutube size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link
                to="/"
                className="group flex items-center gap-1 text-gray-400 transition hover:text-white"
              >
                Home
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/about"
                className="group flex items-center gap-1 text-gray-400 transition hover:text-white"
              >
                About
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/treatments"
                className="group flex items-center gap-1 text-gray-400 transition hover:text-white"
              >
                Treatments
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/contact"
                className="group flex items-center gap-1 text-gray-400 transition hover:text-white"
              >
                Contact
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>

              <Link
                to="/privacy"
                className="group flex items-center gap-1 text-gray-400 transition hover:text-white"
              >
                Privacy Policy
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* Key Treatments */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Key Treatments
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Teeth Cleaning & Scaling</p>
              <p>Tooth Filling</p>
              <p>Dental Implants</p>
              <p>Root Canal Therapy</p>
              <p>Orthodontic Braces</p>
              <p>Clear Aligners</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-purple-400"
                />

                <p className="text-sm leading-6 text-gray-400">
                  B2/8, SBM Layout,
                  <br />
                  Anthivadi, Hosur,
                  <br />
                  Tamil Nadu 635109, India
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-purple-400"
                />

                <a
                  href="mailto:info@sakthidentalclinic.in"
                  className="break-all text-sm text-gray-400 transition hover:text-white"
                >
                  info@sakthidentalclinic.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="mt-1 shrink-0 text-purple-400"
                />

                <div className="text-sm text-gray-400">
                  <a
                    href="tel:+919862890897"
                    className="block transition hover:text-white"
                  >
                    +91 9862890897
                  </a>

                  <a
                    href="tel:+919363298118"
                    className="block transition hover:text-white"
                  >
                    +91 9363298118
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-purple-500/20 bg-purple-900/20 p-6 md:flex-row">
          <div>
            <h3 className="text-lg font-bold">
              Ready to take the next step?
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Schedule your appointment with our dental care team.
            </p>
          </div>

          <Link
            to="/contact"
            className="whitespace-nowrap rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Fix an Appointment
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-gray-500 md:flex-row md:px-8 md:text-left">
          <p>
            © {new Date().getFullYear()} Sakthi Dental Clinic. All rights
            reserved.
          </p>

          <p>
            Designed with care for better dental experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;