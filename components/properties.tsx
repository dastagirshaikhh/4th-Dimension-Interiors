'use client'

import { Property } from '@/types'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const properties: Property[] = [
    {
        id: '1',
        title: 'Modern Apartment in Lagos',
        price: 'NGN 1.5M',
        location: 'Airport Road, Lagos',
        image: 'https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
    },
    {
        id: '2',
        title: 'Luxury Villa in Victoria Island',
        price: 'NGN 2.8M',
        location: 'Victoria Island, Lagos',
        image: 'https://photos.zillowstatic.com/fp/0a7b03240f3206b7d1ad647134d4da5b-cc_ft_960.jpg',
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
    },
    {
        id: '3',
        title: 'Cozy Apartment in Lekki',
        price: 'NGN 3.2M',
        location: 'Lekki, Lagos',
        image: 'https://photos.zillowstatic.com/fp/e2fb240f45cad639deb7bc0f7fbea48f-cc_ft_960.jpg',
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
    },
]

export default function Properties() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section ref={ref} className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className={cn(
                    "text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 delay-100",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    Discover Your Perfect Property Match
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <div
                            key={property.id}
                            className={cn(
                                "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300",
                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                <p className="text-gray-600 mb-4">{property.location}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#3D0C11] font-bold">{property.price}</span>
                                    <Button variant="outline" size="sm">View Details</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cn(
                    "text-center mt-12 transition-all duration-700 delay-500",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    <Link href="/properties">
                        <Button size="lg" className="bg-[#3D0C11] hover:bg-[#2D090D] text-white">
                            View All Properties
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

