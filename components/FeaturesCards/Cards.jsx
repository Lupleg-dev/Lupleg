export default function Cards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Technical Content:
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <span className="font-bold text-green-900">
                ✅ In-depth Tutorials:
              </span>{" "}
              Create detailed guides on specific technologies, frameworks, or
              coding challenges relevant to your development projects.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <span className="font-bold text-green-900">
                ✅ Code Examples and Solutions:
              </span>{" "}
              Share code snippets or open-source projects that showcase best
              practices and solutions to common problems.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#fde68a] to-[#fca5a5] p-8">
            <h2 className="text-2xl font-extrabold text-gray-900">
              <span className="border-20 rounded-full bg-black">❔</span> Ask Me
              Anything (AMA)
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Organize live Q&A sessions with junior & senior developers on our
              team to answer community questions and provides you with necessary
              solutions you need. Offer technical write-ups explaining the
              architecture and design decisions behind your software.
            </p>
            <a
              className="mt-6 text-base font-semibold text-indigo-600 hover:text-indigo-500"
              href="#"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Community-Driven Content
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <span className="font-bold text-green-900">
                ✅ Developer Interviews:
              </span>{" "}
              Feature interviews with talented developers from our team or in
              the broader industry, discussing their career paths, experiences,
              and insights in Tech industry.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <span className="font-bold text-green-900">
                ✅ Hackathons and Challenges:
              </span>{" "}
              Organize coding challenges or hackathons with specific themes or
              goals, encouraging developers to collaborate and showcase their
              skills.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#fde68a] to-[#fca5a5] p-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              <span className="border-20 rounded-full bg-white">🎙️</span>Tech
              Hack Africa
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We have a podcast program, where we dive deep into the world of
              tech, uncovering the secrets behind the digital curtain from all
              circle of innovators. Providing write-ups and discussions on
              emerging technologies, development trends, and the future of
              software development. Also Work Culture Spotlights, where we
              Showcase our company culture, work environment, and employee
              benefits to attract potential interns and developers.
            </p>
            <a
              className="mt-6 text-base font-semibold text-indigo-600 hover:text-indigo-500"
              href="/podcasts"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Code Hack 60
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <span className="font-bold text-green-900">✅ Hack Code 60:</span>{" "}
              is a 60-day coding challenge that will help you improve your
              coding skills through a series of real-world projects. You will be
              given a new project every 2 days, and you will have 2 days to
              complete it.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              <span className="font-bold text-green-900">
                ✅ How the challenge works:
              </span>{" "}
              The projects are designed to help you learn new skills and improve
              your existing ones. You need also have access to a community of
              other developers who are also taking the challenge, so you can get
              help and support from others as you go through the challenge.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#fde68a] to-[#fca5a5] p-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Automation and attention
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Front automatically aggregates & routes customer conversations
              from your channels, ensuring every message gets to the right
              person.
            </p>
            <a
              className="mt-6 text-base font-semibold text-indigo-600 hover:text-indigo-500"
              href="/hack_code_60"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
