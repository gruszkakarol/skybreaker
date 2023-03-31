import { useEffect, useState } from "react";
import { GeoPosition } from "../../domain";

export const useGeoLocation = () => {
    const [position, setPosition] = useState<GeoPosition| undefined>(undefined);

    useEffect(() => {
        if(navigator) {
            const geo = navigator.geolocation;
            if (!geo) {
                return;
            }
            const watcher = geo.watchPosition((pos) => {
                setPosition([
                     pos.coords.latitude,
                     pos.coords.longitude
                ]);
            });
         return () => geo.clearWatch(watcher);
            
        }
       
    }, [])
    
    return position;
};