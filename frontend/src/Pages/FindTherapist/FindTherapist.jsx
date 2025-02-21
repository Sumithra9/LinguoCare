import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindTherapist = () => {
  const [therapists, setTherapists] = useState(JSON.parse(localStorage.getItem('therapists')) || []);
  const navigate = useNavigate();

  const handleSelect = (therapist) => {
    localStorage.setItem('selectedTherapist', JSON.stringify(therapist));
    navigate('/therapist'); // Navigate to therapist page after selection
  };

  return (
    <div>
      <h2>Find a Therapist</h2>
      {therapists.length > 0 ? (
        therapists.map((therapist, index) => (
          <div key={index}>
            <h3>{therapist.name}</h3>
            <p>Specialization: {therapist.specialization}</p>
            <button onClick={() => handleSelect(therapist)}>Select</button>
          </div>
        ))
      ) : (
        <p>No therapists available.</p>
      )}
    </div>
  );
};

export default FindTherapist;
