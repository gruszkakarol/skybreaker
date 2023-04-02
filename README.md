# Skybreaker

## Autopilot software for RC-planes

## Software stack

- UI - Next.JS and TypeScript-based web application with Chakra UI library to speed up UI-related development.
- API - Rust, Axum.
- Flight control - Rust.
- Embedded drivers - Rust.
- Database to keep mission information, something simple - either JSON-based or SQLite.

## Hardware stack

- Quadcopter's brain - most likely micro:bit v2.
- ESC - TBD
- BLDC motors - TBD
- Battery - TBD
- Battery state sensor - TBD
- Quadcopter frame - TBD
- GPS - TBD

## Roadmap - 1.0

The plan for the 1.0 version is to have an imperfect quadcopter start at point A, go to point B and land at point C. To reduce the problems to a smaller subset I decided that at the beginning drone will have a very limited range of about 100 meters radius because the communication will be done via WiFi / Bluetooth as these technologies should be generally easier to accomplish with the current Rust ecosystem as opposed to going into more detailed radio-based communication.

- [ ] - UI
  - [ ] - Mission planning
  - [ ] - Flight control
    - [ ] Manual operation
    - [ ] Sensor's data
    - [ ] Current position
    - [ ] Quadcopter's orientation
- [ ] - Flight control
  - [ ] Quadcopter <-> base communication.
  - [ ] API
    - [ ] Quadcopter's current state
    - [ ] Accept commands from UI and send them to the quadcopter
- [ ] - Quadcopter
  - [ ] Stabilization
  - [ ] Motor driver
  - [ ] Manual mode
  - [ ] Navigation mode
  - [ ] Path planning
  - [ ] Sensors
    - [ ] Accelerometer
    - [ ] Gyroscope
    - [ ] Battery state
  - [ ] GPS

### Useful resources

- https://blackcoffeerobotics.com/blog/gps-based-localization-for-self-driving-robots
- https://github.com/zhm-real/PathPlanning
