"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg"
        >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
                <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#3D0C11] mr-4 mt-1" />
                    <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-gray-600">
                            Kharghar Navi Mumbai,
                            <br />
                            Navi Mumbai (New Mumbai),
                            <br />
                            India 410210
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#3D0C11] mr-4" />
                    <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">
                            <Link href="https://wa.me/+918828086905" passHref target='_blank'>
                                +91 8828086905
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#3D0C11] mr-4" />
                    <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">4thdimension018@gmail.com</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

