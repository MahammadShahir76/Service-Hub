import { useState } from 'react';
import './Plumbers1.css';

function Plumbers1() {
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const filterData = async () => {
    let key = "Plumbers";
    if (key) {
      let result = await fetch(`http://localhost:5000/search1/${key}`);
      result = await result.json();
      setHasSearched(true);
      if (result) {
        setProducts(result);
      }
    }
  };

  return (
    <div className="plumberContainer12345">
      <button className="filterButton67890" onClick={filterData}>
        Filter Plumbers
      </button>

      <div className="productCardsContainer23456">
        {hasSearched && products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="productCard34567">
              <h3>{item.FullName}</h3>
              <p><strong>Phone:</strong> {item.PhoneNumber}</p>
              <p><strong>Address:</strong> {item.Address}</p>
              <p><strong>Specialization:</strong> {item.Specialisation}</p>
              <p><strong>Experience:</strong> {item.Experience} years</p>
              <p><strong>Tools Owned:</strong> {item.ToolsOwned}</p>
              <p><strong>Availability:</strong> {item.Availability}</p>
            </div>
          ))
        ) : (
          hasSearched && <h1 className="noResults45678">No plumbers are listed yet.</h1>
        )}
      </div>
    </div>
  );
}

export default Plumbers1;
