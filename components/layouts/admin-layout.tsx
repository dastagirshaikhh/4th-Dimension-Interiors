"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Calendar,
    Building2,
    Users,
    UserCircle,
    FileText,
    HelpCircle,
    Settings,
    Bell,
    ChevronDown,
    Search,
    BarChart,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AdminLayoutProps {
    children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [isPropertyOpen, setIsPropertyOpen] = useState(true)

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
                <div className="p-6">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#7C5CFC] rounded-xl flex items-center justify-center">
                            <Building2 className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-semibold">Realys</span>
                    </Link>
                </div>

                <div className="px-3">
                    <div className="text-gray-500 text-sm font-medium mb-4 px-3">MENU</div>
                    <nav className="space-y-1">
                        <Link
                            href="/admin"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </Link>
                        <Link
                            href="/admin/calendar"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <Calendar size={20} />
                            <span>Calendar</span>
                        </Link>
                        <div>
                            <button
                                onClick={() => setIsPropertyOpen(!isPropertyOpen)}
                                className="w-full flex items-center justify-between gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <Building2 size={20} />
                                    <span>Property</span>
                                </div>
                                <ChevronDown
                                    size={16}
                                    className={cn("transition-transform", isPropertyOpen ? "transform rotate-180" : "")}
                                />
                            </button>
                            {isPropertyOpen && (
                                <div className="ml-9 mt-1 space-y-1">
                                    <Link href="/admin/properties" className="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
                                        Manage Properties
                                    </Link>
                                    <Link
                                        href="/admin/properties/grid"
                                        className="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
                                    >
                                        Listing Grid
                                    </Link>
                                    <Link
                                        href="/admin/properties/list"
                                        className="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
                                    >
                                        Listing List
                                    </Link>
                                    <Link
                                        href="/admin/properties/map"
                                        className="block px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
                                    >
                                        Listing Map
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/admin/analytics"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <BarChart size={20} />
                            <span>Analytics</span>
                        </Link>
                        <Link
                            href="/admin/agents"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <Users size={20} />
                            <span>Agents</span>
                        </Link>
                        <Link
                            href="/admin/customers"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <UserCircle size={20} />
                            <span>Customers</span>
                        </Link>
                        <Link
                            href="/admin/invoices"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <FileText size={20} />
                            <span>Invoices</span>
                        </Link>
                    </nav>

                    <div className="text-gray-500 text-sm font-medium mb-4 mt-8 px-3">OTHER</div>
                    <nav className="space-y-1">
                        <Link
                            href="/admin/help"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <HelpCircle size={20} />
                            <span>Help Center</span>
                        </Link>
                        <Link
                            href="/admin/settings"
                            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                            <Settings size={20} />
                            <span>Settings</span>
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
                    <div className="w-96">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <Input type="text" placeholder="Search something here" className="pl-10 bg-gray-50 border-0" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative">
                            <Bell size={20} className="text-gray-600" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7C5CFC] text-white text-xs rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}

