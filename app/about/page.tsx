import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import OurMission from "@/components/our-mission"
import TeamSection from "@/components/team-section"
import Testimonials from "@/components/testimonials"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "About 4th Dimension Interior Designers",
    description:
        "Learn about 4th Dimension Interior, our mission, our team, and what makes us the leading luxury Interior Designers.",
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

