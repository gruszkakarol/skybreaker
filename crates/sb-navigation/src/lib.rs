#[cfg(test)]
mod tests {
    use geo::{point, HaversineBearing, HaversineDistance};

    #[test]
    fn test_distance() {
        let point1 = point!(x: 50.56958952466826, y: 17.146986066865413);
        let point2 = point!(x: 50.570115927857344, y: 17.14837813332216);
        let distance = &point1.haversine_distance(&point2);
        println!("Distance: {}", distance);
        let bearing = &point1.haversine_bearing(point2);
        println!("Bearing: {}", bearing);
        // let pos1 = Position::new(50.56958952466826, 17.146986066865413);
        // let pos2 = Position::new(50.570115927857344, 17.14837813332216);

        // println!("Distance: {}", pos1.distance(&pos2));
        // let latitude1 = 0.0; // równik
        // let latitude2 = 45.0_f64.to_radians(); // północna półkula
        // let latitude3 = 90.0_f64.to_radians(); // biegun północny
        // let radius1 = calculate_earth_radius(latitude1);
        // let radius2 = calculate_earth_radius(latitude2);
        // let radius3 = calculate_earth_radius(latitude3);
        // println!("Promień Ziemi na równiku: {} m", radius1);
        // println!("Promień Ziemi na 45°N: {} m", radius2);
        // println!("Promień Ziemi na biegunie północnym: {} m", radius3);
    }
}
