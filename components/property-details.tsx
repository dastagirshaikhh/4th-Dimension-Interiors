"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Bed, Bath, Square, MapPin, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Property } from "@/types"
import Footer from "./footer"
import Navbar from "./navbar"

interface PropertyDetailsProps {
    property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
    const [currentImage, setCurrentImage] = useState(0)

    // For this example, we'll use the same image for all 5 slots
    const images = Array(5).fill(property.image)

    return (
        <>
            <Navbar />
            <main>
                <div className="container mx-auto px-4 py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-6"
                    >
                        {property.title}
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src={images[currentImage] || "/placeholder.svg"}
                                    alt={`${property.title} - Image ${currentImage + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`relative h-20 rounded-md overflow-hidden ${index === currentImage ? "ring-2 ring-primary" : ""
                                            }`}
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${property.title} - Thumbnail ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-3xl font-bold mb-4">{property.price}</h2>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        <span>{property.location}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center">
                                            <Bed className="w-5 h-5 mr-2 text-primary" />
                                            <span>{property.bedrooms} Bedrooms</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Bath className="w-5 h-5 mr-2 text-primary" />
                                            <span>{property.bathrooms} Bathrooms</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Square className="w-5 h-5 mr-2 text-primary" />
                                            <span>{property.area} sqft</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Home className="w-5 h-5 mr-2 text-primary" />
                                            <span>{property.type}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full">Contact Agent</Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                                    <p className="text-gray-600">
                                        This stunning {property.type.toLowerCase()} offers {property.bedrooms} bedrooms and {property.bathrooms}{" "}
                                        bathrooms, spanning an impressive {property.area} square feet. Located in the heart of{" "}
                                        {property.location}, this property combines luxury living with convenience. The modern design and
                                        high-end finishes throughout make this an ideal home for those seeking comfort and style. Don't miss the
                                        opportunity to make this exceptional property yours!
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
