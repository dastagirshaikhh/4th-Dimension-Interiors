"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, DollarSign, TrendingUp } from "lucide-react"
import { getProperties } from "@/app/actions/properties"
import type { Property } from "@/types"

export default function DashboardOverview() {
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        const fetchProperties = async () => {
            const fetchedProperties = await getProperties()
            setProperties(fetchedProperties)
        }
        fetchProperties()
    }, [])

    const totalProperties = properties.length
    const activeProperties = properties.filter((p) => p.status === "active").length
    const totalValue = properties.reduce((sum, p) => sum + Number.parseInt(p.price.replace(/[^0-9.-]+/g, "")), 0)
    const averagePrice = totalProperties > 0 ? totalValue / totalProperties : 0

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalProperties}</div>
                        <p className="text-xs text-muted-foreground">{activeProperties} active listings</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">Across all properties</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average Price</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            ${averagePrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </div>
                        <p className="text-xs text-muted-foreground">Per property</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">+10% from last month</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

