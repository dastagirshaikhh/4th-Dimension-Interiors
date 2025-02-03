"use server"

import { revalidatePath } from "next/cache"
import type { Property } from "@/types"

// This would typically connect to your database
let properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Lagos",
    price: "NGN 1.5M",
    location: "Airport Road, Lagos",
    image: "https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    status: "active",
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    title: "Luxury Villa in Victoria Island",
    price: "NGN 2.8M",
    location: "Victoria Island, Lagos",
    image: "https://photos.zillowstatic.com/fp/0a7b03240f3206b7d1ad647134d4da5b-cc_ft_960.jpg",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    type: "Villa",
    status: "active",
    createdAt: "2023-03-22",
  },
  {
    id: "3",
    title: "Cozy Apartment in Lekki",
    price: "NGN 3.2M",
    location: "Lekki, Lagos",
    image: "https://photos.zillowstatic.com/fp/e2fb240f45cad639deb7bc0f7fbea48f-cc_ft_960.jpg",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "Apartment",
    status: "active",
    createdAt: "2023-05-10",
  },
  {
    id: "4",
    title: "Spacious Townhouse in Ikoyi",
    price: "NGN 4.5M",
    location: "Ikoyi, Lagos",
    image: "https://photos.zillowstatic.com/fp/7f0b4f7f9f7f7f7f7f7f7f7f7f7f7f7f-cc_ft_960.jpg",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    type: "Townhouse",
    status: "active",
    createdAt: "2023-06-05",
  },
  {
    id: "5",
    title: "Penthouse with Ocean View",
    price: "NGN 6.0M",
    location: "Eko Atlantic, Lagos",
    image: "https://photos.zillowstatic.com/fp/8a8a8a8a8a8a8a8a8a8a8a8a8a8a8a8a-cc_ft_960.jpg",
    bedrooms: 5,
    bathrooms: 4,
    area: 3000,
    type: "Penthouse",
    status: "active",
    createdAt: "2023-07-20",
  },
]

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

