import React, { useState } from 'react';


const BookingForm = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [carType, setCarType] = useState('Hatchback');

  const handleStartingPointChange = (event) => {
    setStartingPoint(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleCarTypeChange = (event) => {   
    setCarType(event.target.value);
  };

  const handleBookButtonClick = () => {
    
    const distance = 10; // Example: Assume the distance is 10 km

    // Calculate the charges based on car type
    let chargesPerKm;
    if (carType === 'Hatchback') {
      chargesPerKm = 15;
    } else if (carType === 'Sedan') {
      chargesPerKm = 20;
    } else {
      chargesPerKm = 30;
    }

    const totalCharges = distance * chargesPerKm;

    const bookingSlip = `Booking Slip\n\n`
    + `Starting Point: ${startingPoint}\n`
    + `Destination: ${destination}\n`
    + `Car Type: ${carType}\n`
    + `Distance: ${distance} km\n`
    + `Total Charges: Rs${totalCharges}\n`;

  console.log(bookingSlip);
  };

  return (
    <div>
      <h2>GoTaxi - Book a Taxi</h2>
      <label htmlFor="startingPoint">Starting Point:</label>
      <input
        type="text"

        value={startingPoint}
        onChange={handleStartingPointChange}
      /><br></br><br></br>

      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={handleDestinationChange}
      /><br></br><br></br>

      <div>
        <label htmlFor="pickup-time">Pickup Time:</label>
        <input
          type="datetime-local"
          id="pickup-time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />
      </div>

      <label htmlFor="carType">Car Type:</label>
      <select id="carType" value={carType} onChange={handleCarTypeChange}>
        <option value="Hatchback">Hatchback</option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
      </select><br></br><br></br>

      <button onClick={handleBookButtonClick}>Book</button>
    </div>
  );
};

export default BookingForm;


/* const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create the booking slip
    const slip = `Booking Slip\n\n` +
      `Starting Point: ${startingPoint}\n` +
      `Destination: ${destination}\n` +
      `Car Type: ${carType}\n` +
      `Distance: ${distance} km\n` +
      `Total Charges: Rs${totalCharges}\n`;

    // Set the booking slip to the state
    setBookingSlip(slip);


  {bookingSlip && (
  <div>
    <h2>Booking Slip:</h2>
    <pre>{bookingSlip}</pre>
  </div>
   )}

  };*/