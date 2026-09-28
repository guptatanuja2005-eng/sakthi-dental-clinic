import { Link } from "react-router-dom";
import {
  CircleDot,
  Sparkles,
  Smile,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Tooth Extraction",
    description:
      "Safe and careful tooth extraction when a tooth needs to be removed.",
    icon: CircleDot,
  },
  {
    title: "Artificial Complete Denture",
    description:
      "Comfortable denture solutions designed to restore function and confidence.",
    icon: Smile,
  },
  {
    title: "Tooth Filling",
    description:
      "Restore damaged or decayed teeth with appropriate dental filling treatment.",
    icon: CircleDot,
  },
  {
    title: "Teeth Cleaning & Scaling",
    description:
      "Professional cleaning to remove plaque and tartar while supporting healthy gums.",
    icon: Sparkles,
  },
  {
    title: "Bleaching",
    description:
      "Cosmetic teeth whitening treatment to help create a brighter smile.",
    icon: Sparkles,
  },
  {
    title: "Orthodontic Treatment",
    description:
      "Treatment options designed to improve tooth alignment, bite and smile.",
    icon: Stethoscope,
  },
];

function Services() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wider text-purple-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our{" "}
              <span className="text-purple-600">Dental Services</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              From everyday dental care to specialized treatments, we offer
              comprehensive services designed around your needs.
            </p>
          </div>

          <Link
            to="/treatments"
            className="inline-flex w-fit items-center gap-2 font-semibold text-purple-600 transition hover:text-purple-800"
          >
            View all treatments
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to="/treatments"
                className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-100 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition group-hover:bg-purple-50 group-hover:text-purple-600">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-purple-600">
                  Learn more →
                </p>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900">
            Looking for a specific treatment?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Explore our complete list of dental treatments and find the
            right care option for your needs.
          </p>

          <Link
            to="/treatments"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-100 transition hover:bg-purple-700"
          >
            View Full List of Treatments
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;