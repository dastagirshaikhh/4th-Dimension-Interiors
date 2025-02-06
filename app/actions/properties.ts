"use server"

import { revalidatePath } from "next/cache"
import type { Property } from "@/types"

let properties: Property[] = [
  {
    id: "1",
    title: "Luxury Living Room Makeover",
    price: "NGN 1.5M",
    location: "Airport Road, Lagos",
    image: "https://images.pexels.com/photos/7587858/pexels-photo-7587858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedrooms: 0,
    bathrooms: 0,
    area: 1200,
    type: "Living Room",
    status: "active",
    createdAt: "2023-01-15",
    description:
      "Revamp your living space with this modern living room makeover. Designed to bring elegance and comfort, this space is perfect for relaxation and entertaining guests.",
  },
  {
    id: "2",
    title: "Modern Kitchen Renovation",
    price: "NGN 2.8M",
    location: "Victoria Island, Lagos",
    image: "https://images.pexels.com/photos/7587313/pexels-photo-7587313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedrooms: 0,
    bathrooms: 0,
    area: 2500,
    type: "Kitchen",
    status: "active",
    createdAt: "2023-03-22",
    description:
      "Upgrade your kitchen with a sleek and contemporary design. Featuring state-of-the-art appliances, stylish finishes, and optimized storage solutions, this renovation is perfect for modern homes.",
  },
  {
    id: "3",
    title: "Elegant Bedroom Redesign",
    price: "NGN 3.2M",
    location: "Lekki, Lagos",
    image: "https://images.pexels.com/photos/6970025/pexels-photo-6970025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedrooms: 1,
    bathrooms: 0,
    area: 1800,
    type: "Bedroom",
    status: "active",
    createdAt: "2023-05-10",
    description:
      "Transform your bedroom into a serene retreat with this elegant redesign. Featuring warm lighting, soft textures, and stylish decor, this space is ideal for rest and relaxation.",
  },
  {
    id: "4",
    title: "Spacious Home Office Setup",
    price: "NGN 4.5M",
    location: "Ikoyi, Lagos",
    image: "https://images.pexels.com/photos/7130487/pexels-photo-7130487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedrooms: 0,
    bathrooms: 0,
    area: 2200,
    type: "Office",
    status: "active",
    createdAt: "2023-06-05",
    description:
      "Enhance productivity with a modern home office setup. Designed with ergonomic furniture, ample lighting, and smart storage, this workspace ensures efficiency and style.",
  },
  {
    id: "5",
    title: "Penthouse Lounge & Interior Upgrade",
    price: "NGN 6.0M",
    location: "Eko Atlantic, Lagos",
    image: "https://images.pexels.com/photos/6587849/pexels-photo-6587849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedrooms: 0,
    bathrooms: 0,
    area: 3000,
    type: "Lounge",
    status: "active",
    createdAt: "2023-07-20",
    description:
      "Experience luxury with this stunning penthouse lounge redesign. Featuring elegant decor, premium furnishings, and breathtaking views, this upgrade offers the ultimate relaxation experience.",
  },
];


export async function getProperties() {
  return properties
}

export async function addProperty(formData: FormData) {
  const property = {
    id: Date.now().toString(),
    title: formData.get("title") as string,
    price: formData.get("price") as string,
    location: formData.get("location") as string,
    image: formData.get("image") as string,
    bedrooms: Number.parseInt(formData.get("bedrooms") as string),
    bathrooms: Number.parseInt(formData.get("bathrooms") as string),
    area: Number.parseInt(formData.get("area") as string),
    type: formData.get("type") as string,
    status: "active",
    createdAt: new Date().toISOString().split("T")[0],
    description: formData.get("description") as string,
  }

  properties.push(property)
  revalidatePath("/admin/properties")
  revalidatePath("/properties")
  return { success: true }
}

export async function updateProperty(id: string, formData: FormData) {
  properties = properties.map((property) => {
    if (property.id === id) {
      return {
        ...property,
        title: formData.get("title") as string,
        price: formData.get("price") as string,
        location: formData.get("location") as string,
        image: formData.get("image") as string,
        bedrooms: Number.parseInt(formData.get("bedrooms") as string),
        bathrooms: Number.parseInt(formData.get("bathrooms") as string),
        area: Number.parseInt(formData.get("area") as string),
        type: formData.get("type") as string,
        description: formData.get("description") as string,
      }
    }
    return property
  })

  revalidatePath("/admin/properties")
  revalidatePath("/properties")
  return { success: true }
}

export async function deleteProperty(id: string) {
  properties = properties.filter((property) => property.id !== id)
  revalidatePath("/admin/properties")
  revalidatePath("/properties")
  return { success: true }
}

export async function togglePropertyStatus(id: string) {
  properties = properties.map((property) => {
    if (property.id === id) {
      return {
        ...property,
        status: property.status === "active" ? "inactive" : "active",
      }
    }
    return property
  })

  revalidatePath("/admin/properties")
  revalidatePath("/properties")
  return { success: true }
}

