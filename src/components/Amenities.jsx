import { ArrowRight, Clock, Car, MapPin, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";

const amenities = [
  {
    title: "Convenient Central Location",
    description:
      "Our clinic is conveniently located in the heart of Hosur for easy access.",
    image: "/Images/Icon-city-center.png",
    icon: MapPin,
  },
  {
    title: "Doctors Available Daily",
    description:
      "Our doctors are available daily from 9 AM to 9 PM for your dental care needs.",
    image: "/Images/Icon-doctors.png",
    icon: Clock,
  },
  {
    title: "Hassle-Free Parking",
    description:
      "Convenient parking facilities help make your visit comfortable and stress-free.",
    image: "/Images/Icon-parking.png",
    icon: Car,
  },
  {
    title: "Wheelchair Access",
    description:
      "Our clinic is designed to provide convenient access for all patients.",
    image: "/Images/Icon-wheel-chair.png",
    icon: Accessibility,
  },
];

function Amenities() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            <Accessibility size={16} />
            Patient Comfort
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Designed Around
            <span className="block text-purple-600">Your Comfort</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From convenient access to comfortable facilities, we make every
            visit simple and stress-free.
          </p>
        </div>

        {/* Amenities */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <div
                key={amenity.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl"
              >
                {/* Image */}
                <div className="flex h-40 items-center justify-center overflow-hidden bg-purple-50 p-8">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {amenity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom information */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-gray-950 px-7 py-7 text-center sm:px-10 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">
              Need help planning your visit?
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Our team is ready to help you with your dental care needs.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Amenities;