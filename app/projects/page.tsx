import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsHero from "@/components/projects-hero"
import ProjectsList from "@/components/projects-list"

export const metadata: Metadata = {
    title: "Our Projects | Modia Interiors",
    description: "Explore our portfolio of stunning interior design projects across residential and commercial spaces.",
}

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                <ProjectsHero />
                <ProjectsList />
            </main>
            <Footer />
        </>
    )
}

