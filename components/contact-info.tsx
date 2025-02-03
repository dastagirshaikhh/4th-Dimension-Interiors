"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

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
                            No 2 Michika street off Ahmadu Bello way
                            <br />
                            Area 11 Garki, Abuja
                            <br />
                            Nigeria
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#3D0C11] mr-4" />
                    <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">+234 803 974 3274</p>
                        <p className="text-gray-600">+234 813 538 9424</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#3D0C11] mr-4" />
                    <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">modiaproperties@gmail.com</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

