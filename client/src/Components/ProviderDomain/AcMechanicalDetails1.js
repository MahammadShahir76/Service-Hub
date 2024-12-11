import { useState } from 'react';
import './AcMechanicalDetails1.css';

function AcMechanicalDetails1() {
  const [mechanics, setMechanics] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchAcMechanics = async () => {
    const key = "AC Mechanics";
    if (key) {
      let result = await fetch(`http://localhost:5000/search1/${key}`);
      result = await result.json();
      setHasSearched(true);
      if (result) {
        setMechanics(result);
      }
    }
  };

  return (
    <div className="acContainer98765">
      <button className="searchButton54321" onClick={fetchAcMechanics}>
        Search AC Mechanics
      </button>

      <div className="mechanicCardsContainer87654">
        {hasSearched && mechanics.length > 0 ? (
          mechanics.map((mechanic) => (
            <div key={mechanic._id} className="mechanicCard76543">
              <h3>{mechanic.FullName}</h3>
              <p><strong>Phone:</strong> {mechanic.PhoneNumber}</p>
              <p><strong>Address:</strong> {mechanic.Address}</p>
              <p><strong>Specialization:</strong> {mechanic.Specialisation}</p>
              <p><strong>Experience:</strong> {mechanic.Experience} years</p>
              <p><strong>Availability:</strong> {mechanic.Availability}</p>
            </div>
          ))
        ) : (
          hasSearched && <h1 className="noMechanics65432">No AC mechanics are listed yet.</h1>
        )}
      </div>
    </div>
  );
}

export default AcMechanicalDetails1;
