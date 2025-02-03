import AdminLayout from "@/components/layouts/admin-layout"
import DashboardOverview from "@/components/admin/dashboard-overview"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Admin Dashboard | Modia Properties",
    description: "Overview of your property management system",
}

export default function AdminDashboard() {
    return (
        <AdminLayout>
            <DashboardOverview />
        </AdminLayout>
    )
}

