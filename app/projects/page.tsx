import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Properties from '@/components/properties'
import PropertiesHero from '@/components/properties-hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Discover Your Perfect Interior Match | 4th Dimension Interior Designers',
    description: 'Explore our curated selection of premium designs and find your ideal home or investment opportunity.',
}

export default function PropertiesPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50">
                <PropertiesHero />
                <Properties />
            </main>
            <Footer />
        </>
    )
}

