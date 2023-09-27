// src/BMICalculator.js
import React, { useState } from 'react'; // Import React and useState

function BMICalculator() {
  const [weight, setWeight] = useState(''); // Define and initialize 'weight' state
  const [height, setHeight] = useState(''); // Define and initialize 'height' state
  const [bmi, setBMI] = useState(null);     // Define and initialize 'bmi' state

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI.toFixed(2));
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI: {bmi}</p>}
    </div>
  );
}

export default BMICalculator;
