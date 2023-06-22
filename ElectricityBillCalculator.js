import React, { useState } from 'react';

function ElectricityBillCalculator() {
  const [units, setUnits] = useState('');
  const [totalCharges, setTotalCharges] = useState('');
  const [currentCharges, setCurrentCharges] = useState('');
  const fixedCost = 50;
  const subsidy = 250;

  const calculateBill = () => {
    const consumedUnits = parseInt(units);

    let currentCharges = 0;

    if (consumedUnits <= 100) {
      currentCharges = 0;
    } else if (consumedUnits <= 200) {
      currentCharges = (consumedUnits - 100) * 3.75 + 100;
    } else if (consumedUnits <= 400) {
      currentCharges = (consumedUnits - 200) * 4 + 250;
    } else if (consumedUnits <= 600) {
      currentCharges = (consumedUnits - 400) * 4.25 + 300;
    } else {
      currentCharges = (consumedUnits - 600) * 5 + 400;
    }

    const totalCharges = currentCharges + fixedCost;
    const newSubsidy = subsidy - fixedCost;

    setTotalCharges(totalCharges);
    setCurrentCharges(currentCharges);
  };

  return (
    <div className="container">
      <h2>Electricity Bill Calculator</h2>

      <label htmlFor="consumed_units">Consumed Units:</label>
      <input
        type="number"
        id="consumed_units"
        name="consumed_units"
        placeholder="Enter units consumed"
        required
        value={units}
        onChange={(e) => setUnits(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" onClick={calculateBill} value="Calculate" />

      <br />
      <table border="1">
        <tbody>
          <tr>
            <td>Consumed Units</td>
            <td className="small">{units}</td>
          </tr>
          <tr>
            <td>Total Current Charges Rs</td>
            <td className="small">{totalCharges}</td>
          </tr>
          <tr>
            <td>Current Charges Rs.</td>
            <td className="small">{currentCharges}</td>
          </tr>
          <tr>
            <td>Fixed Cost Rs.(+)</td>
            <td className="small">{fixedCost}</td>
          </tr>
          <tr>
            <td>Subsidy Fixed Cost Rs.(-)</td>
            <td className="small">0.00</td>
          </tr>
          <tr>
            <td>New Subsidy Rs.(-)</td>
            <td className="small">{subsidy - fixedCost}</td>
          </tr>
          <tr>
            <td>Net Amount Rs.</td>
            <td className="small">{totalCharges - (subsidy - fixedCost)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ElectricityBillCalculator;
