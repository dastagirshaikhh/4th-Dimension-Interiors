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
    $id: string;
    title: string;
    description: string;
    location: string;
    area: string;
    category: string;
    completionDate: string;
    clientName: string;
    designerName: string;
    images: string[];
    beforeImage: string;
    afterImage: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    $databaseId: string;
    $collectionId: string;
}


export interface ProjectList {
    $id: string;
    title: string;
    description: string;
    location: string;
    area: string;
    category: string;
    completionDate: string;
    clientName: string;
    designerName: string;
    images: string[];
    beforeImage: string;
    afterImage: string;
}

export interface ProjectDetails {
    title: string;
    afterImage: string;
    area: string;
    beforeImage: string;
    clientName: string;
    completionDate: string;
    description: string;
    designerName: string;
    images: string[];
    location: string;
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

