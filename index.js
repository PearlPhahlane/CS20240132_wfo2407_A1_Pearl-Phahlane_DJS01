/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
//P: renamed variable names
const initialVelocityKmh = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

//P: function to convert acceleration from m/s^2 to km/h^2
const convertAccelartaionToKmh2 = (accelerationMs2) => {
  return accelerationMs2 * 12960; //P: h^2 will be 3600^2 * 0.001(meters to km- 1km = 0.001m)
};

//P: function call - convert accelaration from m/s^2 to km/h^2
const accelerationKmh2 = convertAccelartaionToKmh2(accelerationMs2);

//P: convert time from seconds to hours
const timeHours = timeSeconds / 3600;

//P: function to calculate the new velocity 
const calcNewVel = (initialVelocityKmh, accelerationKmh2, timeHours) => {
  return initialVelocityKmh + accelerationKmh2 * timeHours;
  
};

//P: calculate new values
const newDistance = initialDistanceKm + (initialVelocityKmh * timeHours); // to calculate new distance
const remainingFuelKg = initialFuel - (fuelBurnRateKgPerSecond * timeSeconds); //to calculate remailing fuel 

//P: calculate new velocity, error handling- catch potential errors
let newVelocityKmh;
try {
  newVelocityKmh = calcNewVel(initialVelocityKmh, accelerationKmh2, timeHours);
} catch (error) {
  console.error(`Error calculating new velocity: ${error.message}`);
}

//Output the results 
console.log(`Corrected New Velocity: ${newVelocityKmh} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKg} kg`);







