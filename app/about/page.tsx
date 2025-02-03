import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import OurMission from "@/components/our-mission"
import TeamSection from "@/components/team-section"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
    title: "About Modia Properties | Luxury Real Estate",
    description:
        "Learn about Modia Properties, our mission, our team, and what makes us the leading luxury real estate agency in Nigeria.",
}

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutHero />
                <OurMission />
                <TeamSection />
                <Testimonials />
            </main>
            <Footer />
        </>
    )
}

