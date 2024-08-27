import { Heart, Clock, Share2 } from "lucide-react";

export default function Component() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="relative mb-8">
        <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
          <div className="bg-[#F3A833] rounded-full p-1">
            <span className="text-white text-2xl">{"{"}</span>
            <span className="text-white text-2xl">{"}"}</span>
          </div>
          <div>
            <div className="bg-green-700 text-white text-sm font-bold py-1 px-3 rounded-full">
              Become a Lupleg mentor
            </div>
            <div className=" text-white text-xs py-0.5 px-2  mt-1">Lupleg</div>
          </div>
        </div>
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button className="bg-black bg-opacity-50 p-2 rounded-lg">
            <Heart className="text-white" size={20} />
          </button>
          <button className="bg-black bg-opacity-50 p-2 rounded-lg">
            <Clock className="text-white" size={20} />
          </button>
          <button className="bg-black bg-opacity-50 p-2 rounded-lg">
            <Share2 className="text-white" size={20} />
          </button>
        </div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="/mark.jpg"
            height={480}
            width={854}
            alt="Mark Sikaundi"
            className="w-full h-full object-cover"
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QMCkP7DbGCs?si=3JMW3Rsoi31ur63q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-yellow-400 text-black text-xl font-bold py-1 px-4 rounded-full inline-block">
              Mark Sikaundi
            </div>
            <div className="text-white text-2xl font-bold mt-2">
              Lupleg CEO and Co-founder
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="bg-[#F3A833] rounded-full p-2">
              <span className="text-white text-3xl">{"{"}</span>
              <span className="text-white text-3xl">{"}"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-24 h-1 bg-white mx-auto mt-2"></div>
    </div>
  );
}