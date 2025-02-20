// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { useInView } from "react-intersection-observer"
// import { cn } from "@/lib/utils"


// export default function FeaturedProjects() {
//     const [activeProject, setActiveProject] = useState(projects[0])

//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     })

//     return (
//         <section ref={ref} className="py-24 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 <h2 className={cn(
//                     "text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 delay-100",
//                     inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 )}>
//                     Featured Projects
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     <motion.div
//                         key={activeProject.id}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="relative h-[400px] rounded-lg overflow-hidden"
//                     >
//                         <Image
//                             src={activeProject.image || "/placeholder.svg"}
//                             alt={activeProject.title}
//                             layout="fill"
//                             priority
//                             objectFit="cover"
//                         />
//                     </motion.div>
//                     <div>
//                         <motion.h3
//                             key={`title-${activeProject.id}`}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="text-2xl font-bold mb-4"
//                         >
//                             {activeProject.title}
//                         </motion.h3>
//                         <motion.p
//                             key={`desc-${activeProject.id}`}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.1 }}
//                             className="text-gray-600 mb-6"
//                         >
//                             {activeProject.description}
//                         </motion.p>
//                         <motion.div
//                             key={`details-${activeProject.id}`}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="grid grid-cols-2 gap-4 mb-6"
//                         >
//                             <div>
//                                 <span className="font-semibold">Location:</span> {activeProject.location}
//                             </div>
//                             <div>
//                                 <span className="font-semibold">Category:</span> {activeProject.category}
//                             </div>
//                             <div>
//                                 <span className="font-semibold">Area:</span> {activeProject.area} sqft
//                             </div>
//                             <div>
//                                 <span className="font-semibold">Status:</span> {activeProject.status}
//                             </div>
//                         </motion.div>
//                         <Link href={`/projects/${activeProject.id}`}>
//                             <Button className="transition-all duration-300 transform hover:scale-105">View Project Details</Button>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="mt-12 flex justify-center space-x-4">
//                     {projects.map((project) => (
//                         <Button
//                             key={project.id}
//                             variant={project.id === activeProject.id ? "default" : "outline"}
//                             onClick={() => setActiveProject(project)}
//                         >
//                             Project {project.id}
//                         </Button>
//                     ))}
//                 </div>
//                 <div className="mt-12 text-center">
//                     <Link href="/projects">
//                         <Button size="lg" className="">View All Projects</Button>
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     )
// }



"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Project } from "@/types"


interface FeaturedProjectsProps {
    projects: Project[];
}


export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    if (!projects || projects.length === 0) return null;

    const [activeProject, setActiveProject] = useState(projects[0]);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
                        key={activeProject.$id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[400px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src={activeProject.images?.[0] || "/placeholder.svg"}
                            alt={activeProject.title}
                            layout="fill"
                            priority
                            objectFit="cover"
                        />
                    </motion.div>
                    <div>
                        <motion.h3
                            key={`title-${activeProject.$id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold mb-4"
                        >
                            {activeProject.title}
                        </motion.h3>
                        <motion.p
                            key={`desc-${activeProject.$id}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-600 mb-6"
                        >
                            {activeProject.description}
                        </motion.p>
                        <motion.div
                            key={`details-${activeProject.$id}`}
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
                                <span className="font-semibold">Status:</span> {activeProject.completionDate}
                            </div>
                        </motion.div>
                        <Link href={`/projects/${activeProject.$id}`}>
                            <Button className="transition-all duration-300 transform hover:scale-105">View Project Details</Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-12 flex justify-center space-x-4">
                    {projects.map((project) => (
                        <Button
                            key={project.$id}
                            variant={project.$id === activeProject.$id ? "default" : "outline"}
                            onClick={() => setActiveProject(project)}
                        >
                            {project.title}
                        </Button>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/projects">
                        <Button size="lg">View All Projects</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
