import Image from 'next/image';

export default function Content() {
  return (
    <>
    <section id='hero' className="min-h-screen flex items-center justify-center bg-blue-200">
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

    <section id='about' className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Me
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed space-y-6">
            <p className="font-medium">
                I'm a final-year BSc (Hons) Software Engineering student who loves turning ideas into real, working apps. 
                I focus on building full-stack web projects and cross-platform mobile experiences that feel solid and ready for users.
            </p>

            <p>
                My go-to tools include the MERN stack, Angular paired with FastAPI, Flutter with Firebase, real-time features using Socket.io, Docker for containerization, and CI/CD pipelines to keep everything clean, tested, and easy to maintain. 
                Basically, I enjoy taking tricky problems and solving them with code that's clear and reliable.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl font-bold">{'</>'}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Full-Stack Web
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                MERN stack, Angular, and Python backends for scalable apps
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Mobile Apps
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Cross-platform development with Flutter and React Native
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                DevOps Practices
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Docker containerization, CI/CD pipelines, and automated testing
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Machine Learning
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                TensorFlow models, prediction systems, and data analytics
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
