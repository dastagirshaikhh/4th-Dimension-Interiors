import AdminLayout from '@/components/layouts/admin-layout'
import PropertyManagement from '@/components/admin/property-management'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Property Management | Admin Dashboard',
    description: 'Manage your property listings',
}

export default function PropertyManagementPage() {
    return (
        <AdminLayout>
            <PropertyManagement />
        </AdminLayout>
    )
}

