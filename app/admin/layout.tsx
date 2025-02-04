import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin Dashboard | 4th Dimension Interiors Properties',
    description: 'Manage your properties and listings',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

