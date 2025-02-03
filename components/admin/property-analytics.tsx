"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { getProperties } from "@/app/actions/properties"
import type { Property } from "@/types"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

export default function PropertyAnalytics() {
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        const fetchProperties = async () => {
            const fetchedProperties = await getProperties()
            setProperties(fetchedProperties)
        }
        fetchProperties()
    }, [])

    const propertyTypes = Array.from(new Set(properties.map((p) => p.type)))
    const typeData = propertyTypes.map((type) => properties.filter((p) => p.type === type).length)

    const priceRanges = ["0-500k", "500k-1M", "1M-2M", "2M+"]
    const priceData = priceRanges.map((range) => {
        const [min, max] = range
            .split("-")
            .map((v) =>
                v === "+" ? Number.POSITIVE_INFINITY : Number.parseInt(v.replace("k", "000").replace("M", "000000")),
            )
        return properties.filter((p) => {
            const price = Number.parseInt(p.price.replace(/[^0-9.-]+/g, ""))
            return price >= min && price < max
        }).length
    })

    const monthlyData = Array(12).fill(0)
    properties.forEach((p) => {
        const month = new Date(p.createdAt).getMonth()
        monthlyData[month]++
    })

    const barChartData = {
        labels: propertyTypes,
        datasets: [
            {
                label: "Number of Properties",
                data: typeData,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    }

    const lineChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Properties Added",
                data: monthlyData,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Property Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Properties by Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Bar data={barChartData} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Properties by Price Range</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Bar
                            data={{
                                labels: priceRanges,
                                datasets: [
                                    {
                                        label: "Number of Properties",
                                        data: priceData,
                                        backgroundColor: "rgba(153, 102, 255, 0.6)",
                                    },
                                ],
                            }}
                        />
                    </CardContent>
                </Card>
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Properties Added Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Line data={lineChartData} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

