import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { TileLayer } from 'react-leaflet';
import { GeoPosition } from '@/domain';
import { DEFAULT_GEO_POSITION, DEFAULT_GEO_ZOOM } from '../../config/constants';
import { useEffect, useRef } from 'react';

const MapContainer = dynamic(
    () => import('react-leaflet').then(mod => mod.MapContainer),
    {
        ssr: false,
        loading: () => (
            <div style={{ textAlign: 'center', paddingTop: 20 }}>
                Chargement…
            </div>
        )
    }
)

export type MapProps = {
    width?: string
    height?: string
    startingPosition?: GeoPosition
    zoom?: number
    children?: React.ReactNode
}

export const Map: React.FC<MapProps> = ({ width = "100vw", height = "100vh", zoom = DEFAULT_GEO_ZOOM, startingPosition = DEFAULT_GEO_POSITION, children }) => {

    return (
        <MapContainer
            center={startingPosition} zoom={zoom} scrollWheelZoom={true} style={{ height, width }}>
            <TileLayer

                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )

}

