import AdminLayout from "@/components/layouts/admin-layout"
import DashboardOverview from "@/components/admin/dashboard-overview"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Admin Dashboard | 4th Dimension Interior Designers",
    description: "Overview of your Interior Designing Projects and listings.",
}

export default function AdminDashboard() {
    return (
        <AdminLayout>
            <DashboardOverview />
        </AdminLayout>
    )
}

