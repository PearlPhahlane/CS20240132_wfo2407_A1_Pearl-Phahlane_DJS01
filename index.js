/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmh = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const distanceKm = 0; // distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

//function to convert acceleration from m/s^2 to km/h^2
const convertAccelartaionToKmh2 = (accelerationMs2) => {
  return accelerationMs2 * 12960; // 3600^2 * 0.001(meters to km- 1km = 0.001m)
};

//convert accelaration from m/s^2 to km/h^2
const accelerationKmh2 = convertAccelartaionToKmh2(accelerationMs2);

// convert time from seconds to hours
const timeHours = timeSeconds / 3600;

//function to calculate the new velocity 
const calcNewVel = (initialVelocityKmh, accelerationKmh2, timeHours) => {
  return initialVelocityKmh + accelerationKmh2 * timeHours;
  //validate inputs
  if(typeof initialVelocityKmh !== 'number' || typeof accelerationKmh2 !== 'number' || timeHours !== 'number') {
    throw new Error('Ivalid input: velocity, acceleration, and time must be a number.')
  }
  if (timeHours < 0) {
    throw new Error('Invalid time: time must be positive.')
  }
  return initialVelocityKmh + (accelerationKmh2 * timeHours);
  
};


//const d2 = d + (vel*time) //calcultes new distance
//const rf = fbr*time //calculates remaining fuel
//const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors


//console.log(`Corrected New Velocity: ${vel2} km/h`);
//console.log(`Corrected New Distance: ${d2} km`);
//console.log(`Corrected Remaining Fuel: ${rf} kg`);






