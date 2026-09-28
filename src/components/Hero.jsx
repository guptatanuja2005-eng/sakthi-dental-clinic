import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";

const banners = [
  "/Images/Banner_img_1.jpg",
  "/Images/Banner_img_2.jpg",
  "/Images/Banner_img_3.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-gray-950 sm:min-h-[680px]">
      {/* Background Banners */}
      {banners.map((banner, index) => (
        <div
          key={banner}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner}
            alt={`Sakthi Dental Clinic banner ${index + 1}`}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 sm:min-h-[680px] lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            Trusted Dental Care for Families
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Specialized Dental Care for
            <span className="block text-purple-300">
              Women, Children & Families
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
            Experience compassionate, expert-led dental services tailored to
            your needs, all in a modern and welcoming environment.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl"
            >
              Fix an Appointment
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+919862890897"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
            >
              <Phone size={18} />
              Call the Clinic
            </a>
          </div>

          {/* Trust message */}
          <div className="mt-10 flex items-center gap-3 text-sm text-gray-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              ✓
            </div>

            <p>
              You are always in safe hands. We are ready to help, anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous banner"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900 sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next banner"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to banner ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;