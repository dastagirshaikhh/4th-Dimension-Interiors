import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectDetails from "@/components/project-details"
import { getProjectById } from "@/app/actions/projects"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const project = await getProjectById(params.id)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | Modia Interiors`,
        description: `View details of our ${project.title} project located in ${project.location}`,
    }
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
    const project = await getProjectById(params.id)

    if (!project) {
        notFound()
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                <ProjectDetails project={project} />
            </main>
            <Footer />
        </>
    )
}

