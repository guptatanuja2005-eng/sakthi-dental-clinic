import { Link } from "react-router-dom";
import {
  Sparkles,
  CircleDot,
  Scissors,
  Smile,
  Sparkle,
  Braces,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Tooth Extraction",
    description:
      "Safe and comfortable tooth extraction with careful attention to your comfort and recovery.",
    icon: Scissors,
  },
  {
    number: "02",
    title: "Artificial Complete Denture",
    description:
      "Comfortable and natural-looking complete dentures designed to restore your smile and function.",
    icon: Smile,
  },
  {
    number: "03",
    title: "Tooth Filling",
    description:
      "Effective tooth fillings to repair cavities, protect your teeth and restore their natural function.",
    icon: CircleDot,
  },
  {
    number: "04",
    title: "Teeth Cleaning & Scaling",
    description:
      "Professional cleaning and scaling to remove plaque and tartar while supporting healthier gums.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Bleaching",
    description:
      "Professional teeth whitening treatment to help you achieve a brighter and more confident smile.",
    icon: Sparkle,
  },
  {
    number: "06",
    title: "Orthodontic Treatment",
    description:
      "Personalized orthodontic care to improve tooth alignment, bite and overall smile appearance.",
    icon: Braces,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            <Sparkles size={16} />
            Our Dental Services
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Complete Dental Care
            <span className="block text-purple-600">
              Under One Roof
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From preventive care to advanced dental treatments, our team
            provides personalized solutions designed around your comfort,
            health and confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-5xl font-black text-gray-100 transition duration-300 group-hover:text-purple-50">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <Link
                  to="/treatments"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gray-950 px-7 py-8 text-center sm:px-10 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Looking for the right treatment?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Explore all our dental treatments or speak with our care team.
            </p>
          </div>

          <Link
            to="/treatments"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg"
          >
            View All Treatments
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Services;