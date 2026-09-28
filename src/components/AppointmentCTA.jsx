import { ArrowRight, CalendarDays, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function AppointmentCTA() {
  return (
    <section className="px-5 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-purple-700 px-6 py-12 shadow-2xl shadow-purple-200 sm:px-10 lg:px-16 lg:py-14">
          
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-white/5" />

          <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

            {/* Text */}
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-purple-100">
                <CalendarDays size={16} />
                Your smile deserves expert care
              </div>

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Ready to Take the Next Step Towards a Healthier Smile?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-purple-100">
                Schedule an appointment with our experienced dental team and
                receive compassionate, personalized care for you and your
                family.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-purple-700 shadow-lg transition hover:bg-purple-50"
              >
                <CalendarDays size={19} />
                Fix an Appointment
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+919862890897"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/20"
              >
                <PhoneCall size={18} />
                Call the Clinic
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentCTA;