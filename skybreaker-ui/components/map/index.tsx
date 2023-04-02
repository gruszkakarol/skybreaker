import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { DEFAULT_GEO_POSITION, DEFAULT_GEO_ZOOM } from '../../config/constants';
import { GeoPosition } from '@/store';

const MapLoader = () => (
    <div style={{ textAlign: 'center', paddingTop: 20 }}>
        Chargement…
    </div>
);

const MapContainer = dynamic(
    () => import('react-leaflet').then(mod => mod.MapContainer),
    {
        ssr: false,
        loading: MapLoader
    }
)

const TileLayer = dynamic(
    () => import('react-leaflet').then(mod => mod.TileLayer),
    {
        ssr: false,
        loading: MapLoader
    }
)

export type MapProps = {
    width?: string
    height?: string
    startingPosition?: GeoPosition
    zoom?: number
    children?: React.ReactNode
}

export const Map: React.FC<MapProps> = ({ width = "70vw", height = "95vh", zoom = DEFAULT_GEO_ZOOM, startingPosition = DEFAULT_GEO_POSITION, children }) => {

    return (
        <MapContainer
            center={startingPosition}
            scrollWheelZoom={true}
            style={{ height, width }}
            zoom={zoom}>
            <TileLayer

                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )

}

