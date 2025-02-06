export interface Property {
    id: string
    title: string
    price: string
    location: string
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    type: string
    status?: "active" | "inactive"
    createdAt: string
    description?: string
}

export interface Project {
    id: string
    title: string
    description: string
    location: string
    image?: string
    images?: string[]
    category: string
    completionDate: string
    area: number
    client?: string
    designer?: string
    status: "completed" | "in-progress"
    createdAt: string
    beforeImage?: string
    afterImage?: string
}


export interface Statistic {
    value: number
    label: string
}

export interface Service {
    id: string
    title: string
    description: string
    icon: string
}

