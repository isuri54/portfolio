import Image from 'next/image';

export default function Content() {
  return (
    <>
    <section id='hero' className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 via-sky-300 to-sky-400">
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

      <section id="skills" className="py-20 bg-gray-50 bg-gradient-to-r from-cyan-100 via-sky-300 to-sky-400">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Skills
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
                  {'</>'}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Programming Languages
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'Python', 'Dart', 'C#', 'Java'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
                  📚
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Frameworks & Libraries
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'FastAPI', 'React', 'Node.js', 'Express', 'Next.js', 'Angular', 'TailwindCSS', 'Flutter', 'React Native', '.Net'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
                  🗄️
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Databases
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['MongoDB', 'Firebase', 'PostgreSQL', 'MySQL',].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl">
                  ⚙️
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tools & DevOps
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Git', 'Docker', 'CI/CD', 'Postman'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Projects
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Service Booking Platform
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  A full-stack service booking web application with role-based authentication,
                  booking management, real-time chat, and effective provider profile management.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-700">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB', 'Docker', 'CI pipeline'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  🔗 Demo
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Skill Exchange Mobile App
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Cross-platform mobile app for exchange skills with
                  mentor matching, scheduling, in-app chat and community features.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-700">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'Cloud Firestore'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Interview Success Score Prediction System
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Machine learning model to predict interview success score for IT candidates with a clean web application.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-700">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'RandomForest', 'Angular', 'Docker', 'CI pipeline'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  🔗 Demo
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Mobile App to Book Appointments with Veterinarians
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  Cross-platform mobile application to book appointments with vets, role-based user authentication, and search vets.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-700">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'Cloud Firestore'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  E-Commerce Mobile App
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  E-Commerce mobile app with effective product management, cart, favourites, and order history.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-700">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['TypeScript', 'React Native', 'Zustand'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Tomato excess harvest prediction and management system
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  An ANN model to predict excess harvest, with a web application to coordinate harvest.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-700">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'TensorFlow', 'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  🔗 Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
