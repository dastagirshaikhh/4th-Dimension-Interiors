import { Service } from '@/types'

const services: Service[] = [
    {
        id: '01',
        title: 'Property Sales',
        description: 'Assisting clients in buying and selling residential, commercial, and investment properties.',
    },
    {
        id: '02',
        title: 'Property Rentals',
        description: 'Connecting landlords with tenants and managing rental agreements.',
    },
    {
        id: '03',
        title: 'Property Management',
        description: 'Handling day-to-day operations, maintenance, and budget relations for property owners.',
    },
]

export default function Services() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Modia Properties</h2>
                <div className="space-y-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex items-start gap-8 group border-b border-gray-100 pb-12 last:border-0"
                        >
                            <div className="font-mono text-[#3D0C11] text-xl font-bold bg-[#FBF9F4] w-12 h-12 flex items-center justify-center rounded-full">
                                {service.id}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#3D0C11] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 max-w-2xl font-light">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

