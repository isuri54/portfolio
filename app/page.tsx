import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Isuri Dharmarathne
            </h1>

            <h2 className="mt-4 text-lg text-gray-700">
              Full Stack & Mobile Developer
            </h2>

            <p className="mt-3 text-gray-600 max-w-xl">
              Building scalable solutions and turning ideas into elegant code
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/Isuri_Dharmarathne_SE_Intern.pdf"
                download="Isuri_Dharmarathne_SE_intern.pdf"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition"
                >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Isuri Dharmarathne"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
