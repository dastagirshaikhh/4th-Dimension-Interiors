// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"
// import emailjs from '@emailjs/browser'
// import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/email'


// const formSchema = z.object({
//     name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//     email: z.string().email({ message: "Invalid email address." }),
//     phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
//     message: z.string().min(10, { message: "Message must be at least 10 characters." }),
// })

// export default function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     })
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [isSuccess, setIsSuccess] = useState(false)
//     const [errorMessage, setErrorMessage] = useState('')


//     const { toast } = useToast()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//     })

//     const onSubmit = async () => {
//         setIsSubmitting(true)
//         // Simulate API call
//         // await new Promise((resolve) => setTimeout(resolve, 1000))
//         try {
//             const result = await emailjs.send(
//                 EMAILJS_SERVICE_ID,
//                 EMAILJS_TEMPLATE_ID,
//                 {
//                     from_name: formData.name,
//                     from_email: formData.email,
//                     phone: formData.phone,
//                     message: formData.message
//                 },
//                 EMAILJS_PUBLIC_KEY
//             )
//             console.log('EmailJS result:', result.text)
//             setIsSuccess(true)
//             setFormData({ name: '', email: '', phone: '', message: '' })
//         } catch (error) {
//             console.error('EmailJS error:', error)
//             setIsSuccess(false)
//             if (error instanceof Error) {
//                 setErrorMessage(error.message)
//             } else {
//                 setErrorMessage('An unknown error occurred')
//             }
//         }

//         setIsSubmitting(false)
//         toast({
//             title: "Message Sent",
//             description: "We have received your message and will get back to you soon.",
//         })
//         reset()
//     }

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white p-8 rounded-lg shadow-lg"
//         >
//             <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div>
//                     <Input {...register("name")} placeholder="Your Name" className="w-full" />
//                     {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//                 </div>
//                 <div>
//                     <Input {...register("email")} type="email" placeholder="Your Email" className="w-full" />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//                 </div>
//                 <div>
//                     <Input {...register("phone")} placeholder="Your Phone" className="w-full" />
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
//                 </div>
//                 <div>
//                     <Textarea {...register("message")} placeholder="Your Message" className="w-full" rows={4} />
//                     {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
//                 </div>
//                 <Button type="submit" className="w-full bg-[#3D0C11] hover:bg-[#3D0C11]/90" disabled={isSubmitting}>
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                 </Button>
//             </form>
//         </motion.div>
//     )
// }



'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/email';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage('')

        try {
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                EMAILJS_PUBLIC_KEY
            )
            console.log('EmailJS result:', result.text)
            setIsSuccess(true)
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            console.error('EmailJS error:', error)
            setIsSuccess(false)
            if (error instanceof Error) {
                setErrorMessage(error.message)
            } else {
                setErrorMessage('An unknown error occurred')
            }
        }

        setIsSubmitting(false)
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 5000)
    }

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            {/* <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full" required />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full" required />
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" className="w-full" required />
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full" rows={4} required />
                <Button type="submit" className="w-full bg-[#3D0C11] hover:bg-[#3D0C11]/90" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
            </form> */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                        required
                    />
                </div>
                <div>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                        required
                    />
                </div>
                <div>
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number (Optional)"
                        className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                    />
                </div>
                <div>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md border-gray-300 focus:border-[#3D0C11] focus:ring-[#3D0C11]"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-[#3D0C11] hover:bg-[#2D090D] text-white font-semibold py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-5 right-5 bg-white rounded-lg shadow-lg p-6 max-w-sm"
                    >
                        <div className="flex items-center">
                            {isSuccess ? (
                                <CheckCircle className="text-green-500 mr-3" size={24} />
                            ) : (
                                <XCircle className="text-red-500 mr-3" size={24} />
                            )}
                            <p className="text-lg font-semibold">
                                {isSuccess ? 'Message Sent Successfully!' : 'Failed to Send Message'}
                            </p>
                        </div>
                        <p className="mt-2 text-gray-600">
                            {isSuccess
                                ? "Thank you for reaching out. We'll get back to you soon."
                                : errorMessage || "There was an error sending your message. Please try again later."}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
