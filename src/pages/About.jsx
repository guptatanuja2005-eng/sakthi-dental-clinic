import {
  Award,
  CalendarDays,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Anupriya",
    role: "Founder",
  },
  {
    name: "Dr. Ananya Iyer",
    role: "Prosthodontist",
  },
  {
    name: "Dr. Meera Subramanian",
    role: "Endodontist",
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Dental Surgeon",
  },
  {
    name: "Dr. Sneha N",
    role: "Orthodontist",
  },
  {
    name: "Dr. Srinivas Rohit Ramanujam",
    role: "Implantologist",
  },
  {
    name: "Dr. Balu",
    role: "Laser Surgeon",
  },
  {
    name: "Dr. Vikram Raj Kishore",
    role: "Aligners Partner",
  },
  {
    name: "Dr. Ajay Jumar",
    role: "Oral & Maxillofacial Surgeon",
  },
];

function About() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-violet-50 px-5 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
              ABOUT SAKTHI DENTAL CLINIC
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Experience, Care &{" "}
              <span className="text-purple-700">
                Compassion
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Sakthi Dental Clinic was founded with a commitment to providing
              compassionate and personalized dental care in a modern and
              welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Founder visual */}
          <div className="relative">
            <div className="rounded-[2rem] bg-purple-100 p-6 sm:p-8">
              <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-white shadow-sm">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-purple-100">
                    <Stethoscope
                      size={52}
                      className="text-purple-700"
                    />
                  </div>

                  <p className="mt-6 text-xl font-bold text-gray-900">
                    Dr. Anupriya
                  </p>

                  <p className="mt-1 text-sm font-medium text-purple-700">
                    Founder
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-6">
              <p className="text-2xl font-extrabold text-purple-700">
                20+
              </p>
              <p className="text-xs font-medium text-gray-500">
                Years of expertise
              </p>
            </div>
          </div>

          {/* Founder content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-purple-600">
              Meet Our Founder
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Dr. Anupriya
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Dr. Anupriya graduated in 2000 and brings over 20 years of
              expertise in dental care.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              She spent six years at Mathura Clinic before founding Sakthi
              Dental Clinic in Hosur in 2004.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              She has also served as a consultant at the Primary Health Center
              and Chandara Hospital for over a decade.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                <Award className="text-purple-700" size={24} />

                <p className="mt-3 font-bold text-gray-900">
                  20+ Years
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Of professional expertise
                </p>
              </div>

              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                <CalendarDays className="text-purple-700" size={24} />

                <p className="mt-3 font-bold text-gray-900">
                  Since 2004
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Serving patients in Hosur
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Clinic Story */}
      <section className="bg-purple-50/60 px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
              OUR APPROACH
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Care Built Around{" "}
              <span className="text-purple-700">
                Our Patients
              </span>
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We focus on comfort, safety, transparency, and personalized care
              throughout the patient journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <HeartHandshake
                size={30}
                className="text-purple-700"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Compassionate Care
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                A welcoming approach designed to make patients feel
                comfortable and cared for.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <ShieldCheck
                size={30}
                className="text-purple-700"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Patient Safety
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Safety and transparency remain important parts of our
                patient-centric approach.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <Stethoscope
                size={30}
                className="text-purple-700"
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Specialized Expertise
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                A team covering multiple dental specialties under one clinic.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-purple-600">
              OUR TEAM
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Dental{" "}
              <span className="text-purple-700">
                Specialists
              </span>
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our team includes nine doctors covering a range of dental
              specialties and services.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {doctor.name}
                    </h3>

                    <p className="mt-1 text-sm text-purple-700">
                      {doctor.role}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-purple-700 px-6 py-12 text-center sm:px-10 lg:px-16">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Take Care of Your Smile?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-100">
              Schedule an appointment and experience personalized dental care
              for you and your family.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-purple-700 transition hover:bg-purple-50"
            >
              <CalendarDays size={19} />
              Fix an Appointment
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;