"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote:
            "Modia Properties made finding our dream home an absolute pleasure. Their expertise and dedication are unmatched.",
        author: "Sarah & Tom Johnson",
    },
    {
        quote:
            "As an investor, I've worked with many real estate firms, but Modia Properties stands out for their professionalism and market insights.",
        author: "David Chen",
    },
    {
        quote:
            "The team at Modia Properties went above and beyond to ensure a smooth and successful property sale. Highly recommended!",
        author: "Amina Okafor",
    },
]

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    What Our Clients Say
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <Quote size={48} className="text-[#3D0C11] mb-4" />
                                        <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                                    </div>
                                    <p className="text-right font-semibold">{testimonial.author}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

