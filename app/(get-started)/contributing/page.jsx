import { Users, FileText, HelpCircle } from "lucide-react"
import GetStarted from "@/components/contribute/GetStarted"
import ExploreTasks from "@/components/contribute/ExploreTasks"

export default function Contributing() {
  return (
    <div className="min-h-screen bg-white p-4 mt-16 md:p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="text-green-600">
          <Users size={32} />
        </div>
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-yellow-400 rounded-sm"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
          <div className="w-6 h-6 bg-emerald-400 rounded-sm"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-green-950 mb-4">
              Let's build the best coding education platform, together
            </h1>
            <p className="text-gray-600 mb-4">
              Lupleg is an <span className="text-green-600">open source, not-for-profit project</span> built by people from all backgrounds.
              With over one hundred dedicated maintainers and thousands of contributors, our goal is
              to create the best, free, code learning platform on the web.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/contributing.svg?height=300&width=300"
              alt="Illustration of three people wearing Lupleg t-shirts"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        <nav className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-4 mb-8">
          <button className="flex items-center space-x-2 text-green-600 font-semibold pb-4 border-b-2 border-green-600">
            <FileText size={20} />
            <span>Getting Started</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 font-semibold">
            <FileText size={20} />
            <span>Explore tasks</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">425</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 font-semibold">
            <Users size={20} />
            <span>Contributors</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">14,811</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 font-semibold">
            <HelpCircle size={20} />
            <span>Contributing Help</span>
          </button>
        </nav>

        <section>
          <h2 className="text-2xl md:text-4xl font-bold text-green-950 text-center mt-6 mb-8">
            How you can help us build Lupleg
          </h2>
          <div className="flex justify-center">
            <svg viewBox="0 0 100 20" className="w-24">
              <path d="M0 10 Q25 20 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600" />
            </svg>
          </div>
        </section>
      </main>
      <GetStarted/>
      <ExploreTasks/>
    </div>
  )
}