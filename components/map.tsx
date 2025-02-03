'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

interface MapProps {
    properties: Array<{
        id: string
        title: string
        location: string
        price: number
        coordinates: [number, number]
    }>
    selectedProperty: string | null
}

export default function Map({ properties, selectedProperty }: MapProps) {
    useEffect(() => {
        // Fix the missing icon issue
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
        })
    }, [])

    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {properties.map((property) => (
                <Marker
                    key={property.id}
                    position={property.coordinates}
                    icon={
                        selectedProperty === property.id
                            ? new L.Icon({
                                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            })
                            : undefined
                    }
                >
                    <Popup>
                        <div className="text-sm">
                            <h3 className="font-semibold">{property.title}</h3>
                            <p className="text-gray-500">{property.location}</p>
                            <p className="font-semibold mt-1">${property.price}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

