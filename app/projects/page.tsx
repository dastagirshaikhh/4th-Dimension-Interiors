import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsHero from "@/components/projects-hero"
import ProjectsList from "@/components/projects-list"
import { GetProjects } from "../actions/appwrite"
import { ProjectList } from "@/types"

export const metadata: Metadata = {
    title: "Our Projects | Modia Interiors",
    description: "Explore our portfolio of stunning interior design projects across residential and commercial spaces.",
}

export default async function ProjectsPage() {

    const projects = await GetProjects();

    const projectList: ProjectList[] = projects?.documents.map((doc) => ({
        $id: doc.$id,
        title: doc.title,
        description: doc.description,
        location: doc.location,
        area: doc.area,
        category: doc.category,
        completionDate: doc.completionDate,
        clientName: doc.clientName,
        designerName: doc.designerName,
        images: doc.images,
        beforeImage: doc.beforeImage,
        afterImage: doc.afterImage,
    })) || [];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                <ProjectsHero />
                <ProjectsList projects={projectList} />
            </main>
            <Footer />
        </>
    )
}

