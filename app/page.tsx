import Image from 'next/image';
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

export default function Content() {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
        
          <a
            href="#hero"
            className="text-xl font-bold text-white hover:text-cyan-400 transition"
          >
            Isuri.dev
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#hero" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>

    <section id='hero' className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          <div className="text-center md:text-left ml-40">
            <h6 className="text-4xl md:text-5xl font-bold text-white">
              Hello, It's Me
            </h6>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-cyan-400">
              Isuri Dharmarathne
            </h1>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Full Stack Developer <br></br> <br></br> 
            </h1>

            <p className="mt-3 text-xl text-gray-300 max-w-xl">
              Passionate Software Engineering undergraduate <br></br> with a strong interest in building reliable, user-focused applications and learning modern technologies through hands-on development.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-white font-medium hover:bg-cyan-600 transition"
              >
                View Projects
              </a>

              <a
                href="/Isuri_Dharmarathne_SE_Intern.pdf"
                download="Isuri_Dharmarathne_SE_intern.pdf"
                className="inline-flex items-center justify-center rounded-full border border-cyan-400 px-6 py-3 text-cyan-400 font-medium hover:bg-cyan-950 transition"
                >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mr-40">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>

    </section>

    <section id='about' className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              About Me
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-cyan-500 rounded"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
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
            
            <div className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 text-center hover:shadow-lg transition hover:border-cyan-500">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400">
                <span className="text-xl font-bold">{'</>'}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Full-Stack Web
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                MERN stack, Angular, and Python backends for scalable apps
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 text-center hover:shadow-lg transition hover:border-cyan-500">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Mobile Apps
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Cross-platform development with Flutter and React Native
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 text-center hover:shadow-lg transition hover:border-cyan-500">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                DevOps Practices
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Docker containerization, CI/CD pipelines, and automated testing
              </p>
            </div>

            <div className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 text-center hover:shadow-lg transition hover:border-cyan-500">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white">
                Machine Learning
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                TensorFlow models, prediction systems, and data analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Skills
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-cyan-500 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 text-xl">
                  {'</>'}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Programming Languages
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'Python', 'Dart', 'C#', 'Java'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 text-xl">
                  📚
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Frameworks & Libraries
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'FastAPI', 'React', 'Node.js', 'Express', 'Next.js', 'Angular', 'TailwindCSS', 'Flutter', 'React Native', '.Net'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 text-xl">
                  🗄️
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Databases
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['MongoDB', 'Cloud Firestore', 'PostgreSQL', 'MySQL',].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 text-xl">
                  ⚙️
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Tools & DevOps
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Git', 'Docker', 'CI/CD', 'Postman'].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Projects
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-cyan-500 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-cyan-500">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Service Booking Platform
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  A full-stack service booking web application with role-based authentication,
                  booking management, real-time chat, and effective provider profile management.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-300">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'TailwindCSS', 'MongoDB', 'Docker', 'CI pipeline'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-950 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/isuri54/servicehub"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition text-white"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600 transition"
                >
                  🔗 Demo
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-cyan-500">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Skill Exchange Mobile App
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Cross-platform mobile app for exchange skills with
                  mentor matching, scheduling, in-app chat and community features.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-300">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'Cloud Firestore'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-950 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://github.com/isuri54/skill-bridge"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition text-white"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-cyan-500">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Interview Success Score Prediction System
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Machine learning model to predict interview success score for IT candidates with a clean web application.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-300">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'RandomForest', 'Angular', 'Docker', 'CI pipeline'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-950 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/isuri54/prepscore"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition text-white"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600 transition"
                >
                  🔗 Demo
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-cyan-500">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Mobile App to Book Appointments with Veterinarians
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Cross-platform mobile application to book appointments with vets, role-based user authentication, and search vets.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-300">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Flutter', 'Firebase', 'Cloud Firestore'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-950 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/isuri54/petty"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition text-white"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-cyan-500">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  E-Commerce Mobile App
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  E-Commerce mobile app with effective product management, cart, favourites, and order history.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-300">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['TypeScript', 'React Native', 'Zustand'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-950 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/isuri54/cakeworld"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition text-white"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-cyan-500">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Tomato excess harvest prediction and management system
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  An ANN model to predict excess harvest, with a web application to coordinate harvest.
                </p>

                <p className="mt-6 text-sm font-medium text-gray-300">Tech Stack:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'TensorFlow', 'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB'].map(tech => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-950 px-3 py-1 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/isuri54/agriscope"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 transition text-white"
                >
                  🐙 GitHub
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-600 transition"
                >
                  🔗 Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Education
            </h2>
            <div className="mt-3 mx-auto h-1 w-20 bg-cyan-500 rounded"></div>
          </div>

          <div className="rounded-2xl border border-cyan-400 bg-zinc-950 p-8 shadow-sm">

            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 text-2xl">
                🎓
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Bachelor of Science (Hons) Software Engineering
                </h3>

                <p className="mt-1 text-gray-300 font-medium">
                  University of Plymouth
                </p>

                <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                  📅 Expected Graduation: Nov 2026
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-800" />

            <div>
              <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                🏅 Academic Highlights
              </h4>

              <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  Strong foundation in core CS subjects including Data Structures, Algorithms, OOP, Database Systems, and Software Design
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  Completed multiple academic and personal projects using real-world development practices
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  Applied Agile concepts, Git-based collaboration, and clean coding principles in coursework
                </li>

                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  Actively self-learning modern technologies and best practices through hands-on projects and documentation
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            
            <a
              href="/certificates/flutter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 hover:shadow-lg transition group hover:border-cyan-500"
            >
              <h5 className="text-base font-semibold text-white group-hover:text-cyan-400">
                Flutter Development Certification
              </h5>

              <p className="mt-2 text-sm text-gray-400">
                LinkedIn Learning
              </p>

              <p className="mt-3 text-sm text-cyan-400 font-medium">
                View Certificate →
              </p>
            </a>

            <a
              href="/certificates/AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 hover:shadow-lg transition group hover:border-cyan-500"
            >
              <h5 className="text-base font-semibold text-white group-hover:text-cyan-400">
                Artificial Intelligence and Machine Learning Foundations
              </h5>

              <p className="mt-2 text-sm text-gray-400">
                LinkedIn Learning
              </p>

              <p className="mt-3 text-sm text-cyan-400 font-medium">
                View Certificate →
              </p>
            </a>

            <a
              href="/certificates/atari certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 hover:shadow-lg transition group hover:border-cyan-500"
            >
              <h5 className="text-base font-semibold text-white group-hover:text-cyan-400">
                Java Software Engineering
              </h5>

              <p className="mt-2 text-sm text-gray-400">
                ATARI City Campus
              </p>

              <p className="mt-3 text-sm text-cyan-400 font-medium">
                View Certificate →
              </p>
            </a>

            <a
              href="/certificates/react.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 hover:shadow-lg transition group hover:border-cyan-500"
            >
              <h5 className="text-base font-semibold text-white group-hover:text-cyan-400">
                React Development
              </h5>

              <p className="mt-2 text-sm text-gray-400">
                LinkedIn Learning
              </p>

              <p className="mt-3 text-sm text-cyan-400 font-medium">
                View Certificate →
              </p>
            </a>

            <a
              href="/certificates/python.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 hover:shadow-lg transition group hover:border-cyan-500"
            >
              <h5 className="text-base font-semibold text-white group-hover:text-cyan-400">
                Python Fundamentals
              </h5>

              <p className="mt-2 text-sm text-gray-400">
                University of Moratuwa
              </p>

              <p className="mt-3 text-sm text-cyan-400 font-medium">
                View Certificate →
              </p>
            </a>

            <a
              href="/certificates/web.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-400 bg-zinc-950 p-6 hover:shadow-lg transition group hover:border-cyan-500"
            >
              <h5 className="text-base font-semibold text-white group-hover:text-cyan-400">
                Web Development
              </h5>

              <p className="mt-2 text-sm text-gray-400">
                University of Moratuwa
              </p>

              <p className="mt-3 text-sm text-cyan-400 font-medium">
                View Certificate →
              </p>
            </a>

          </div>
        </div>

      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">Get In Touch</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities, collaborations, or
                just having a chat about technology.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-cyan-400 rounded-xl bg-zinc-950">
                  <div className="p-3 bg-cyan-950 rounded-full text-cyan-400">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">ipabasara93@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-cyan-400 rounded-xl bg-zinc-950">
                  <div className="p-3 bg-cyan-950 rounded-full text-cyan-400">
                    🐙
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a
                      href="https://github.com/isuri54"
                      target="_blank"
                      className="font-medium text-white hover:text-cyan-400"
                    >
                      github.com/isuri54
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-cyan-400 rounded-xl bg-zinc-950">
                  <div className="p-3 bg-cyan-950 rounded-full text-cyan-400">
                    💼
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/isuri-dharmarathne/"
                      target="_blank"
                      className="font-medium text-white hover:text-cyan-400"
                    >
                      linkedin.com/in/isuri-dharmarathne
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-zinc-950 p-8 rounded-2xl border border-cyan-400 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-black py-3 rounded-lg font-medium hover:bg-cyan-400 transition flex items-center justify-center gap-2"
              >
                ✈️ Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="footer" className="py-10 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <p className="text-center md:text-left text-gray-400 text-lg">
              © 2026 Isuri Dharmarathne. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/isuri-dharmarathne/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full border border-gray-700 hover:bg-cyan-500 hover:border-cyan-500 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://github.com/isuri54"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full border border-gray-700 hover:bg-gray-800 transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.facebook.com/your-facebook-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 rounded-full border border-gray-700 hover:bg-cyan-500 hover:border-cyan-500 transition"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}