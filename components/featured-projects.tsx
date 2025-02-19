"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

const projects: Project[] = [
    {
        id: "1",
        title: "Modern Minimalist Apartment",
        description: "A sleek and minimalist design for a city apartment, focusing on clean lines and functional spaces.",
        location: "Lagos, Nigeria",
        image:
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Residential",
        completionDate: "2023-05-15",
        area: 1200,
        status: "completed",
        createdAt: "2023-01-10",
    },
    {
        id: "2",
        title: "Luxury Hotel Lobby",
        description: "An opulent and welcoming lobby design for a 5-star hotel, blending local culture with modern luxury.",
        location: "Abuja, Nigeria",
        image:
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        category: "Commercial",
        completionDate: "2023-07-20",
        area: 3000,
        status: "completed",
        createdAt: "2023-02-15",
    },
    {
        id: "3",
        title: "Eco-Friendly Office Space",
        description:
            "A sustainable office design that promotes productivity and employee well-being while minimizing environmental impact.",
        location: "Port Harcourt, Nigeria",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        category: "Commercial",
        completionDate: "2023-09-01",
        area: 5000,
        status: "in-progress",
        createdAt: "2023-04-01",
    },
]

export default function FeaturedProjects() {
    const [activeProject, setActiveProject] = useState(projects[0])

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className={cn(
                    "text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 delay-100",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[400px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src={activeProject.image || "/placeholder.svg"}
                            alt={activeProject.title}
                            layout="fill"
                            priority
                            objectFit="cover"
                        />
                    </motion.div>
                    <div>
                        <motion.h3
                            key={`title-${activeProject.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold mb-4"
                        >
                            {activeProject.title}
                        </motion.h3>
                        <motion.p
                            key={`desc-${activeProject.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-600 mb-6"
                        >
                            {activeProject.description}
                        </motion.p>
                        <motion.div
                            key={`details-${activeProject.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4 mb-6"
                        >
                            <div>
                                <span className="font-semibold">Location:</span> {activeProject.location}
                            </div>
                            <div>
                                <span className="font-semibold">Category:</span> {activeProject.category}
                            </div>
                            <div>
                                <span className="font-semibold">Area:</span> {activeProject.area} sqft
                            </div>
                            <div>
                                <span className="font-semibold">Status:</span> {activeProject.status}
                            </div>
                        </motion.div>
                        <Link href={`/projects/${activeProject.id}`}>
                            <Button className="transition-all duration-300 transform hover:scale-105">View Project Details</Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-12 flex justify-center space-x-4">
                    {projects.map((project) => (
                        <Button
                            key={project.id}
                            variant={project.id === activeProject.id ? "default" : "outline"}
                            onClick={() => setActiveProject(project)}
                        >
                            Project {project.id}
                        </Button>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/projects">
                        <Button size="lg" className="">View All Projects</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

