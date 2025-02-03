'use client'

import { useState } from 'react'
import AdminLayout from '@/components/layouts/admin-layout'
import { Input } from '@/components/ui/input'
import { MapPin, Bed, Bath, Maximize, MoreHorizontal } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import the map component to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false })

interface Property {
    id: string
    title: string
    location: string
    price: number
    image: string
    bedrooms: number
    bathrooms: number
    area: number
    coordinates: [number, number]
}

const properties: Property[] = [
    {
        id: '1',
        title: 'White Apartement',
        location: 'Wonderlust, Wonderland',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        bedrooms: 3,
        bathrooms: 2,
        area: 1458,
        coordinates: [51.505, -0.09],
    },
    {
        id: '2',
        title: 'Whity White House',
        location: 'Wonderlust, Wonderland',
        price: 1636,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
        bedrooms: 1,
        bathrooms: 1,
        area: 1200,
        coordinates: [51.51, -0.1],
    },
    {
        id: '3',
        title: 'Blue Jeans Homes',
        location: 'Wonderlust, Wonderland',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6',
        bedrooms: 2,
        bathrooms: 2,
        area: 1350,
        coordinates: [51.515, -0.095],
    },
]

export default function PropertyListingMap() {
    const [selectedProperty, setSelectedProperty] = useState<string | null>(null)

    return (
        <AdminLayout>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold mb-1">Property Listing Map</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Realys</span>
                    <span>/</span>
                    <span>Property</span>
                    <span>/</span>
                    <span className="text-gray-900">Listing List Map</span>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-4">
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="text"
                            placeholder="Search Property Location"
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="flex h-[calc(100vh-250px)]">
                    {/* Property List */}
                    <div className="w-[450px] border-r overflow-auto">
                        {properties.map((property) => (
                            <div
                                key={property.id}
                                className={cn(
                                    "p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors",
                                    selectedProperty === property.id ? "bg-gray-50" : ""
                                )}
                                onClick={() => setSelectedProperty(property.id)}
                            >
                                <div className="flex gap-4">
                                    <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <h3 className="font-semibold">{property.title}</h3>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal size={20} />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                                            <MapPin size={16} />
                                            <span>{property.location}</span>
                                        </div>
                                        <div className="flex gap-4 mt-3 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Bed size={16} />
                                                <span>{property.bedrooms} Bedrooms</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath size={16} />
                                                <span>{property.bathrooms} Bathroom</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm mt-2">
                                            <Maximize size={16} />
                                            <span>{property.area} sqft</span>
                                        </div>
                                        <div className="mt-3">
                                            <span className="text-lg font-semibold">${property.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map */}
                    <div className="flex-1">
                        <Map properties={properties} selectedProperty={selectedProperty} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

