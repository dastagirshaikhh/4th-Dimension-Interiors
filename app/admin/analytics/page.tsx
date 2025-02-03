import AdminLayout from "@/components/layouts/admin-layout"
import PropertyAnalytics from "@/components/admin/property-analytics"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Property Analytics | Admin Dashboard",
    description: "Analyze your property portfolio performance",
}

export default function AnalyticsPage() {
    return (
        <AdminLayout>
            <PropertyAnalytics />
        </AdminLayout>
    )
}

