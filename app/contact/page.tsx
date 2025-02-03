import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
    title: "Contact Modia Properties | Luxury Real Estate",
    description: "Get in touch with Modia Properties for all your luxury real estate needs in Nigeria.",
}

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <ContactHero />
                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

