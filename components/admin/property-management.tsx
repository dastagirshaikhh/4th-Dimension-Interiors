"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Edit, Trash2, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import type { Property } from "@/types"
import PropertyForm from "./property-form"
import { deleteProperty, togglePropertyStatus, getProperties } from "@/app/actions/properties"
import { useToast } from "@/hooks/use-toast"

export default function PropertyManagement() {
    const [searchTerm, setSearchTerm] = useState("")
    const [properties, setProperties] = useState<Property[]>([])
    const [editingProperty, setEditingProperty] = useState<Property | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [sortColumn, setSortColumn] = useState<keyof Property>("title")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
    const { toast } = useToast()

    const itemsPerPage = 10

    useEffect(() => {
        const fetchProperties = async () => {
            const fetchedProperties = await getProperties()
            setProperties(fetchedProperties)
        }
        fetchProperties()
    }, [])

    const filteredProperties = properties.filter(
        (property) =>
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const sortedProperties = [...filteredProperties].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        return 0
    })

    const paginatedProperties = sortedProperties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const totalPages = Math.ceil(sortedProperties.length / itemsPerPage)

    const handleSort = (column: keyof Property) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortDirection("asc")
        }
    }

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this property?")) {
            const result = await deleteProperty(id)
            if (result.success) {
                setProperties(properties.filter((p) => p.id !== id))
                toast({
                    title: "Property deleted",
                    description: "The property has been successfully deleted.",
                })
            }
        }
    }

    const handleToggleStatus = async (id: string) => {
        const result = await togglePropertyStatus(id)
        if (result.success) {
            setProperties(
                properties.map((p) => {
                    if (p.id === id) {
                        return { ...p, status: p.status === "active" ? "inactive" : "active" }
                    }
                    return p
                }),
            )
            toast({
                title: "Status updated",
                description: "The property status has been updated successfully.",
            })
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Property Management</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Property
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Add New Property</DialogTitle>
                        </DialogHeader>
                        <PropertyForm
                            onSuccess={() => {
                                toast({
                                    title: "Property added",
                                    description: "The new property has been successfully added.",
                                })
                            }}
                        />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-4 border-b">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            type="text"
                            placeholder="Search properties..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="p-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead onClick={() => handleSort("title")} className="cursor-pointer">
                                    Property
                                    {sortColumn === "title" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="inline ml-1" size={16} />
                                        ) : (
                                            <ChevronDown className="inline ml-1" size={16} />
                                        ))}
                                </TableHead>
                                <TableHead onClick={() => handleSort("location")} className="cursor-pointer">
                                    Location
                                    {sortColumn === "location" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="inline ml-1" size={16} />
                                        ) : (
                                            <ChevronDown className="inline ml-1" size={16} />
                                        ))}
                                </TableHead>
                                <TableHead onClick={() => handleSort("type")} className="cursor-pointer">
                                    Type
                                    {sortColumn === "type" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="inline ml-1" size={16} />
                                        ) : (
                                            <ChevronDown className="inline ml-1" size={16} />
                                        ))}
                                </TableHead>
                                <TableHead onClick={() => handleSort("price")} className="cursor-pointer">
                                    Price
                                    {sortColumn === "price" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="inline ml-1" size={16} />
                                        ) : (
                                            <ChevronDown className="inline ml-1" size={16} />
                                        ))}
                                </TableHead>
                                <TableHead onClick={() => handleSort("status")} className="cursor-pointer">
                                    Status
                                    {sortColumn === "status" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="inline ml-1" size={16} />
                                        ) : (
                                            <ChevronDown className="inline ml-1" size={16} />
                                        ))}
                                </TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedProperties.map((property) => (
                                <TableRow key={property.id}>
                                    <TableCell className="font-medium">{property.title}</TableCell>
                                    <TableCell>{property.location}</TableCell>
                                    <TableCell>{property.type}</TableCell>
                                    <TableCell>{property.price}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs ${property.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {property.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleToggleStatus(property.id)}>
                                                {property.status === "active" ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </Button>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="ghost" size="icon" onClick={() => setEditingProperty(property)}>
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl">
                                                    <DialogHeader>
                                                        <DialogTitle>Edit Property</DialogTitle>
                                                    </DialogHeader>
                                                    <PropertyForm
                                                        property={editingProperty}
                                                        onSuccess={() => {
                                                            setEditingProperty(null)
                                                            toast({
                                                                title: "Property updated",
                                                                description: "The property has been successfully updated.",
                                                            })
                                                        }}
                                                    />
                                                </DialogContent>
                                            </Dialog>
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(property.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="p-4 border-t">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

