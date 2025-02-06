// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { Bed, Bath, Square, Home } from 'lucide-react'
// import { Property } from '@/types'

// interface PropertyCardProps {
//     property: Property
// }

// export default function PropertyCard({ property }: PropertyCardProps) {
//     return (
//         <motion.div
//             className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//             whileHover={{ y: -5 }}
//         >
//             <div className="relative h-64">
//                 <Image
//                     src={property.image}
//                     alt={property.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
//                 <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-[#3D0C11]">
//                     {property.price}
//                 </div>
//             </div>
//             <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{property.title}</h3>
//                 <p className="text-gray-600 mb-4">{property.location}</p>
//                 <div className="flex justify-between text-sm text-gray-500 mb-4">
//                     <div className="flex items-center">
//                         <Bed size={18} className="mr-1" />
//                         <span>{property.bedrooms} Beds</span>
//                     </div>
//                     <div className="flex items-center">
//                         <Bath size={18} className="mr-1" />
//                         <span>{property.bathrooms} Baths</span>
//                     </div>
//                     <div className="flex items-center">
//                         <Square size={18} className="mr-1" />
//                         <span>{property.area} sqft</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500">
//                     <Home size={18} className="mr-1" />
//                     <span>{property.type}</span>
//                 </div>
//             </div>
//         </motion.div>
//     )
// }


import Image from "next/image"
import { motion } from "framer-motion"
import { Bed, Bath, Square, Home } from "lucide-react"
import type { Property } from "@/types"
import Link from "next/link"

interface PropertyCardProps {
    property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
        >
            <Link href={`/projects/${property.id}`}>
                <div className="relative h-64">
                    <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10" />
                    <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-[#3D0C11]">
                        {property.price}
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                            <Bed size={18} className="mr-1" />
                            <span>{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center">
                            <Bath size={18} className="mr-1" />
                            <span>{property.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center">
                            <Square size={18} className="mr-1" />
                            <span>{property.area} sqft</span>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <Home size={18} className="mr-1" />
                        <span>{property.type}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

