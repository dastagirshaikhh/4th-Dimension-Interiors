import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types"

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
        >
            <Link href={`/projects/${project.id}`}>
                <div className="relative h-64">
                    <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
                    <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-[#3D0C11]">
                        {project.category}
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                            <MapPin size={18} className="mr-1" />
                            <span>{project.location}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar size={18} className="mr-1" />
                            <span>{project.completionDate}</span>
                        </div>
                    </div>
                    <Button className="w-full">View Project</Button>
                </div>
            </Link>
        </motion.div>
    )
}

