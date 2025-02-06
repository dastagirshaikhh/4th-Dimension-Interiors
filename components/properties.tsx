'use client'

import { Property } from '@/types'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


// const properties: Property[] = [
//     {
//         id: '1',
//         title: 'Modern Apartment in Lagos',
//         price: 'INR 1.5M',
//         location: 'Airport Road, Lagos',
//         image: 'https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg',
//         bedrooms: 2,
//         bathrooms: 2,
//         area: 1200,
//         type: 'Apartment', // Add this
//         createdAt: new Date().toISOString(), // Add this
//     },
//     {
//         id: '2',
//         title: 'Luxury Villa in Victoria Island',
//         price: 'INR 2.8M',
//         location: 'Victoria Island, Lagos',
//         image: 'https://photos.zillowstatic.com/fp/0a7b03240f3206b7d1ad647134d4da5b-cc_ft_960.jpg',
//         bedrooms: 4,
//         bathrooms: 3,
//         area: 2500,
//         type: 'Villa', // Add this
//         createdAt: new Date().toISOString(), // Add this
//     },
//     {
//         id: '3',
//         title: 'Cozy Apartment in Lekki',
//         price: 'INR 3.2M',
//         location: 'Lekki, Lagos',
//         image: 'https://photos.zillowstatic.com/fp/e2fb240f45cad639deb7bc0f7fbea48f-cc_ft_960.jpg',
//         bedrooms: 3,
//         bathrooms: 2,
//         area: 1800,
//         type: 'Apartment', // Add this
//         createdAt: new Date().toISOString(), // Add this
//     },
// ]

// const properties: Property[] = [
//     {
//         id: '1',
//         title: 'Luxury Living Room Makeover',
//         price: 'INR 1.5M',
//         location: 'Khar, Mumbai',
//         image: 'https://images.pexels.com/photos/7587858/pexels-photo-7587858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         bedrooms: 0, // Not applicable, but keeping type consistency
//         bathrooms: 0,
//         area: 1200,
//         type: 'Living Room', // Updated for interior design category
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: '2',
//         title: 'Modern Kitchen Renovation',
//         price: 'INR 2.8M',
//         location: 'Tardeo, Mumbai',
//         image: 'https://images.pexels.com/photos/7587313/pexels-photo-7587313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         bedrooms: 0,
//         bathrooms: 0,
//         area: 2500,
//         type: 'Kitchen',
//         createdAt: new Date().toISOString(),
//     },
//     {
//         id: '3',
//         title: 'Elegant Bedroom Redesign',
//         price: 'INR 3.2M',
//         location: 'Bandra, Mumbai',
//         image: 'https://images.pexels.com/photos/6970025/pexels-photo-6970025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//         bedrooms: 1, // Represents a bedroom redesign
//         bathrooms: 0,
//         area: 1800,
//         type: 'Bedroom',
//         createdAt: new Date().toISOString(),
//     },
// ];


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
                    Discover the Perfect Design to Match Your Vision
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
                                    priority
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                                <p className="text-gray-600 mb-4">{property.location}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#3D0C11] font-bold">{property.price}</span>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/projects/${property.id}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cn(
                    "text-center mt-12 transition-all duration-700 delay-500",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                    <Link href="/projects">
                        <Button size="lg" className="bg-[#3D0C11] hover:bg-[#2D090D] text-white">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

