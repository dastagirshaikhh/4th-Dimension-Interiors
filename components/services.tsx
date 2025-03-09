import type { Service } from "@/types"
import { Paintbrush, Sofa, Lightbulb, Ruler } from "lucide-react"

const services: Service[] = [
    {
        id: "01",
        title: "Interior Design",
        description: "Comprehensive interior design services for residential and commercial spaces.",
        icon: "Paintbrush",
    },
    {
        id: "02",
        title: "Space Planning",
        description: "Optimizing layout and flow to maximize functionality and aesthetics of your space.",
        icon: "Sofa",
    },
    {
        id: "03",
        title: "Lighting Design",
        description: "Creating the perfect ambiance through strategic lighting solutions.",
        icon: "Lightbulb",
    },
    {
        id: "04",
        title: "Custom Furniture",
        description: "Designing and sourcing bespoke furniture pieces to fit your unique style.",
        icon: "Ruler",
    },
]

export default function Services() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Services</h2>
                <div className="space-y-12">
                    {services.map((service) => (
                        <div key={service.id} className="flex items-start gap-8 group border-b border-gray-100 pb-12 last:border-0">
                            <div className="font-mono text-[#3D0C11] text-xl font-bold bg-[#FBF9F4] w-12 h-12 flex items-center justify-center rounded-full">
                                {service.id}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#3D0C11] transition-colors flex items-center">
                                    {service.icon === "Paintbrush" && <Paintbrush className="w-5 h-5 mr-2" />}
                                    {service.icon === "Sofa" && <Sofa className="w-5 h-5 mr-2" />}
                                    {service.icon === "Lightbulb" && <Lightbulb className="w-5 h-5 mr-2" />}
                                    {service.icon === "Ruler" && <Ruler className="w-5 h-5 mr-2" />}
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 max-w-2xl font-light">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

