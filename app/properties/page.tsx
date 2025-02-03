import Properties from '@/components/properties'
import PropertiesHero from '@/components/properties-hero'
import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'Discover Your Perfect Property Match | Modia Properties',
    description: 'Explore our curated selection of premium properties and find your ideal home or investment opportunity.',
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

