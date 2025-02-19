"use client"

// import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// import { getProjects } from "@/app/actions/projects"
import ProjectCard from "@/components/project-card"
import type { ProjectList } from "@/types"

interface ProjectListProps {
    projects: ProjectList[];
}

export default function ProjectsList({ projects }: ProjectListProps) {
    // const [projectList, setProjectList] = useState<ProjectList[]>(projects)

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const fetchedProjects = await getProjects()
    //         setProjects(fetchedProjects)
    //     }
    //     fetchProjects()
    // }, [])

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.$id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

