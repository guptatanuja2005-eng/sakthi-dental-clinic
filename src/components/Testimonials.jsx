import { Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Manisha M",
    text: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.",
  },
  {
    name: "Mr. Arun Kumar",
    text: "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I've recommended Sakthi Dental Clinic to my entire family.",
  },
  {
    name: "Mrs. Revathi S",
    text: "Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-wider text-purple-600">
            Patient Stories
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            A comfortable dental experience is built on trust, care and
            attention to every patient.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-3xl border border-purple-100 bg-purple-50/40 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              {/* Quote */}
              <div className="absolute right-7 top-7 text-purple-200">
                <Quote size={42} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-purple-500 text-purple-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 text-[15px] leading-7 text-gray-600">
                "{testimonial.text}"
              </p>

              {/* Patient */}
              <div className="mt-7 flex items-center gap-3 border-t border-purple-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-gray-500">
                    <ShieldCheck size={13} className="text-purple-600" />
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl bg-gray-50 px-6 py-7 text-center sm:flex-row">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <ShieldCheck size={21} />
          </div>

          <p className="font-semibold text-gray-700">
            Compassionate care and patient comfort are at the heart of
            every visit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;