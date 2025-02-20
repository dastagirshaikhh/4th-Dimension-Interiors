'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Project } from '@/types'


interface ProjectsProps {
    projects: Project[];
}

export default function Properties({ projects }: ProjectsProps) {
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
                    Discover the Perfect Design to Match Your Vision
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.$id}
                            className={cn(
                                "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    layout="fill"
                                    priority
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.location}</p>
                                <div className="flex justify-between items-center">
                                    {/* <span className="text-[#3D0C11] font-bold">{project.price}</span> */}
                                    <Button variant="outline" size="sm" asChild className='transition-all duration-300 transform hover:scale-105'>
                                        <Link href={`/projects/${project.$id}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cn(
                    "text-center mt-12 transition-all duration-700 delay-500",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    <Link href="/projects">
                        <Button size="lg" className="bg-[#3D0C11] hover:bg-[#2D090D] text-white">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

