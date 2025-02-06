"use server"

import { revalidatePath } from "next/cache"
import type { Project } from "@/types"

let projects: Project[] = [
    {
        id: "1",
        title: "Modern Minimalist Apartment",
        description:
            "A sleek and minimalist design for a city apartment, focusing on clean lines and functional spaces. The project transformed a cluttered space into an open, airy environment that maximizes natural light and creates a sense of calm.",
        location: "Lagos, Nigeria",
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
            "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
        ],
        category: "Residential",
        completionDate: "2023-05-15",
        area: 1200,
        client: "John & Sarah Thompson",
        designer: "Emma Rodriguez",
        status: "completed",
        createdAt: "2023-01-10",
        beforeImage:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        afterImage:
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
        id: "2",
        title: "Luxury Hotel Lobby",
        description:
            "An opulent and welcoming lobby design for a 5-star hotel, blending local culture with modern luxury. The project focused on creating a grand first impression while ensuring functionality and comfort for guests.",
        location: "Abuja, Nigeria",
        images: [
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        ],
        category: "Commercial",
        completionDate: "2023-07-20",
        area: 3000,
        client: "Luxury Stays Hotels",
        designer: "Michael Chang",
        status: "completed",
        createdAt: "2023-02-15",
        beforeImage:
            "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        afterImage:
            "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
        id: "3",
        title: "Eco-Friendly Office Space",
        description:
            "A sustainable office design that promotes productivity and employee well-being while minimizing environmental impact. The project incorporated green materials, energy-efficient systems, and biophilic design elements.",
        location: "Port Harcourt, Nigeria",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        category: "Commercial",
        completionDate: "2023-09-01",
        area: 5000,
        client: "GreenTech Solutions",
        designer: "Olivia Green",
        status: "in-progress",
        createdAt: "2023-04-01",
        beforeImage:
            "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        afterImage:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
]

export async function getProjects() {
    return projects
}

export async function getProjectById(id: string) {
    return projects.find((project) => project.id === id)
}

export async function addProject(formData: FormData) {
    const project = {
        id: Date.now().toString(),
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        location: formData.get("location") as string,
        images: [formData.get("image") as string],
        category: formData.get("category") as string,
        completionDate: formData.get("completionDate") as string,
        area: Number.parseInt(formData.get("area") as string),
        client: formData.get("client") as string,
        designer: formData.get("designer") as string,
        status: "in-progress" as const,
        createdAt: new Date().toISOString().split("T")[0],
        beforeImage: formData.get("beforeImage") as string,
        afterImage: formData.get("afterImage") as string,
    }

    projects.push(project)
    revalidatePath("/projects")
    return { success: true }
}

export async function updateProject(id: string, formData: FormData) {
    projects = projects.map((project) => {
        if (project.id === id) {
            return {
                ...project,
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                location: formData.get("location") as string,
                images: [formData.get("image") as string],
                category: formData.get("category") as string,
                completionDate: formData.get("completionDate") as string,
                area: Number.parseInt(formData.get("area") as string),
                client: formData.get("client") as string,
                designer: formData.get("designer") as string,
                beforeImage: formData.get("beforeImage") as string,
                afterImage: formData.get("afterImage") as string,
            }
        }
        return project
    })

    revalidatePath("/projects")
    revalidatePath(`/projects/${id}`)
    return { success: true }
}

export async function deleteProject(id: string) {
    projects = projects.filter((project) => project.id !== id)
    revalidatePath("/projects")
    return { success: true }
}

export async function toggleProjectStatus(id: string) {
    projects = projects.map((project) => {
        if (project.id === id) {
            return {
                ...project,
                status: project.status === "completed" ? "in-progress" : "completed",
            }
        }
        return project
    })

    revalidatePath("/projects")
    revalidatePath(`/projects/${id}`)
    return { success: true }
}

