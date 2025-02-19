"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Ruler, User, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types"
import Link from "next/link"

interface ProjectDetailsProps {
    project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const [selectedImage, setSelectedImage] = useState<number>(0)

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6"
            >
                {project.title}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={project.images?.[selectedImage] || "/placeholder.svg"}
                            alt={`${project.title} - Image ${selectedImage + 1}`}
                            layout="fill"
                            priority
                            objectFit="cover"
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {project.images?.map((image, index) => (
                            <div
                                key={index}
                                className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${index === selectedImage ? "ring-2 ring-[#3D0C11]" : ""
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${project.title} - Thumbnail ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-[#3D0C11]" />
                                    <span>{project.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-[#3D0C11]" />
                                    <span>{project.completionDate}</span>
                                </div>
                                <div className="flex items-center">
                                    <Ruler className="w-5 h-5 mr-2 text-[#3D0C11]" />
                                    <span>{project.area} sqft</span>
                                </div>
                                <div className="flex items-center">
                                    <User className="w-5 h-5 mr-2 text-[#3D0C11]" />
                                    <span>{project.client}</span>
                                </div>
                                <div className="flex items-center col-span-2">
                                    <Paintbrush className="w-5 h-5 mr-2 text-[#3D0C11]" />
                                    <span>{project.designer}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">{project.description}</p>
                            <Button className="w-full transition-all duration-300 transform hover:scale-105" asChild>
                                <Link href="/contact">
                                    Contact Us About This Project
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold mb-6">Before & After</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Before</h3>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src={project.beforeImage || "/placeholder.svg"}
                                alt={`${project.title} - Before`}
                                layout="fill"
                                priority
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">After</h3>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src={project.afterImage || "/placeholder.svg"}
                                alt={`${project.title} - After`}
                                layout="fill"
                                priority
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

