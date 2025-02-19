import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectDetails from "@/components/project-details"
import ProjectDetailsHero from "@/components/ProjectDetailsHero"
import { GetProjectById } from "@/app/actions/appwrite"



export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const params = await props.params;
    const project = await GetProjectById(params.id)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | 4th Dimension Interiors`,
        description: `View details of our ${project.title} project located in ${project.location}`,
    }
}


export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const project = await GetProjectById(params.id)

    if (!project) {
        notFound()
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                <ProjectDetailsHero image={project.images?.[0]} />
                <ProjectDetails
                    title={project.title}
                    images={project.images}
                    description={project.description}
                    location={project.location}
                    area={project.area}
                    clientName={project.clientName}
                    completionDate={project.completionDate}
                    designerName={project.designerName}
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                />
            </main>
            <Footer />
        </>
    )
}

