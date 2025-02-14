"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Smile, X } from "lucide-react"

export default function Showcase() {
  const [selectedImage, setSelectedImage] = useState()

  const templates = [
    {
      title: "Delicious & Affordable",
      highlight: "Meals Near You.",
      description: "Find the best local restaurants and get your favorite meals delivered right to your doorstep.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.17.36%20AM-yl90uTUaQSEVr54cGe5fo8UcxChx9y.png",
      features: ["Online Menu", "Real-Time Orders", "Fast Delivery"],
      demoLink: "https://food-delivery-demo.vercel.app",
    },
    {
      title: "Find Perfect Hotels",
      highlight: "anywhere you go.",
      description: "Get all kinds of accommodation options for your next trip that will delight your stay with us.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.17.36%20AM-yl90uTUaQSEVr54cGe5fo8UcxChx9y.png",
      features: ["Secure", "24/7 Support", "Customizable"],
      demoLink: "https://hotel-booking-demo.vercel.app",
    },
    {
      title: "Beautiful React Templates",
      highlight: "for you.",
      description:
        "Our templates are easy to setup, understand and customize. Each packed with a variety of widgets and components.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.17.36%20AM-yl90uTUaQSEVr54cGe5fo8UcxChx9y.png",
      features: ["Reliable", "Fast", "Easy"],
      demoLink: "https://react-templates-demo.vercel.app",
    },
  ]

  return (
    <>
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Header */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">
                    {template.title}{" "}
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-md inline-block">
                      {template.highlight}
                    </span>
                  </h3>
                  <p className="text-gray-600">{template.description}</p>
                </div>

                {/* Features */}
                <div className="px-6 pb-6">
                  <div className="flex gap-4 flex-wrap">
                    {template.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1 text-sm text-gray-600">
                        {i === 0 && <Shield className="w-4 h-4 text-purple-600" />}
                        {i === 1 && <Clock className="w-4 h-4 text-purple-600" />}
                        {i === 2 && <Smile className="w-4 h-4 text-purple-600" />}
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview Image */}
                <div
                  className="relative h-64 bg-gray-100 cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedImage(template.image)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setSelectedImage(template.image)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="View larger image"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white text-sm font-medium">Click to preview</span>
                  </div>
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={`${template.title} template preview`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Demo Button */}
                <div className="p-6">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open(template.demoLink, "_blank")}
                  >
                    View Live Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Template preview"
              className="w-full h-auto rounded-lg shadow-2xl"
              style={{ maxHeight: "85vh", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  )
}

