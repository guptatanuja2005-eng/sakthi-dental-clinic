import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const treatments = [
  {
    title: "Teeth Cleaning & Scaling",
    description:
      "Professional cleaning and scaling to remove plaque and tartar and support healthier gums.",
    image: "/Images/Teeth Cleaning.png",
  },
  {
    title: "Tooth Filling",
    description:
      "Effective fillings to repair cavities, protect your teeth and restore their natural function.",
    image: "/Images/Tooth-Filling.jpg",
  },
  {
    title: "Tooth Extraction",
    description:
      "Safe and carefully planned tooth extraction with attention to patient comfort.",
    image: "/Images/Teeth Extraction.png",
  },
  {
    title: "Artificial Complete Denture",
    description:
      "Comfortable and natural-looking complete dentures designed to restore smile and function.",
    image: "/Images/Artificial Complete Denture.png",
  },
  {
    title: "Dental Implants",
    description:
      "Modern implant solutions designed to replace missing teeth and restore confidence.",
    image: "/Images/Impants.png",
  },
  {
    title: "Laser Dentistry",
    description:
      "Advanced laser-assisted dental care designed for precise and comfortable treatment.",
    image: "/Images/Laser-Surgery.png",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Treatment focused on saving infected or damaged teeth while relieving discomfort.",
    image: "/Images/Root Canal Treatment.png",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "Careful removal of problematic wisdom teeth with a focus on safety and recovery.",
    image: "/Images/Wisdom Teeth Removal.png",
  },
  {
    title: "Fixed Partial Denture (Bridge)",
    description:
      "Fixed dental bridges that help replace missing teeth and restore everyday function.",
    image: "/Images/Fixed Partial Denture.png",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment to help create a brighter and more confident smile.",
    image: "/Images/Bleaching.png",
  },
  {
    title: "Veneers",
    description:
      "Aesthetic dental veneers designed to improve the appearance of your smile.",
    image: "/Images/Veneer Treatment.jpg",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Dental care designed around the comfort and oral health needs of children.",
    image: "/Images/Pediatric-dentistry.png",
  },
  {
    title: "Flap Surgery",
    description:
      "Specialized gum treatment to support oral health and manage periodontal concerns.",
    image: "/Images/Flap-surgery.png",
  },
  {
    title: "Orthodontic Braces",
    description:
      "Personalized orthodontic treatment to improve tooth alignment and bite.",
    image: "/Images/Orthodonic-Treatment.png",
  },
  {
    title: "Clear Aligners",
    description:
      "A discreet orthodontic option designed to gradually improve tooth alignment.",
    image: "/Images/Aligner.png",
  },
];

function Treatments() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
            <Sparkles size={16} />
            Our Treatments
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Complete Dental Treatments
            <span className="block text-purple-300">
              For Every Smile
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
            Explore our range of dental treatments delivered with
            personalized care, modern techniques and a focus on your comfort.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <article
                key={treatment.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-purple-700 shadow-sm backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {treatment.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {treatment.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-all group-hover:gap-3"
                  >
                    Book a Consultation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-purple-600 px-7 py-12 text-center sm:px-10 sm:py-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not sure which treatment you need?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-purple-100 sm:text-base">
            Speak with our dental care team and get guidance based on your
            individual needs.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-purple-700 shadow-lg transition hover:bg-gray-100 hover:shadow-xl"
          >
            Fix an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Treatments;