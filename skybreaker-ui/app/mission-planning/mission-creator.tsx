import { useMapEvents } from "react-leaflet"

export function MissionCreator() {
    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound: (location) => {
            console.log('location found:', location)
        },
    })
    return null
}