"use client"

import { useState } from "react"
import type { Property } from "@/types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { addProperty, updateProperty } from "@/app/actions/properties"

interface PropertyFormProps {
    property?: Property | null
    onSuccess?: () => void
}

export default function PropertyForm({ property, onSuccess }: PropertyFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)

        try {
            if (property) {
                await updateProperty(property.id, formData)
            } else {
                await addProperty(formData)
            }
            onSuccess?.()
        } catch (error) {
            console.error("Error submitting property:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                        Title
                    </label>
                    <Input id="title" name="title" defaultValue={property?.title} required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">
                        Price
                    </label>
                    <Input id="price" name="price" defaultValue={property?.price} required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                        Location
                    </label>
                    <Input id="location" name="location" defaultValue={property?.location} required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium">
                        Type
                    </label>
                    <Select name="type" defaultValue={property?.type || "Apartment"}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Apartment">Apartment</SelectItem>
                            <SelectItem value="House">House</SelectItem>
                            <SelectItem value="Villa">Villa</SelectItem>
                            <SelectItem value="Penthouse">Penthouse</SelectItem>
                            <SelectItem value="Townhouse">Townhouse</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="bedrooms" className="text-sm font-medium">
                        Bedrooms
                    </label>
                    <Input id="bedrooms" name="bedrooms" type="number" defaultValue={property?.bedrooms} required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="bathrooms" className="text-sm font-medium">
                        Bathrooms
                    </label>
                    <Input id="bathrooms" name="bathrooms" type="number" defaultValue={property?.bathrooms} required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="area" className="text-sm font-medium">
                        Area (sqft)
                    </label>
                    <Input id="area" name="area" type="number" defaultValue={property?.area} required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="image" className="text-sm font-medium">
                        Image URL
                    </label>
                    <Input id="image" name="image" type="url" defaultValue={property?.image} required />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                    Description
                </label>
                <Textarea id="description" name="description" defaultValue={property?.description} required />
            </div>
            <div className="flex justify-end gap-4">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : property ? "Update Property" : "Add Property"}
                </Button>
            </div>
        </form>
    )
}

