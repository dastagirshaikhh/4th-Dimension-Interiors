import type { Metadata } from "next"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "Contact 4th Dimension Interior Designers",
    description: "Get in touch with 4th Dimension Interior for all your luxury Interior needs.",
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

