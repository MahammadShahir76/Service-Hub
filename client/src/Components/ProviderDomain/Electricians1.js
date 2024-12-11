import { useState } from 'react';
import './Electricians1.css';

function Electricians1() {
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state to track if the search has been performed

  const filterData = async () => {
      let key = "Electricians";
      if (key) {
          let result = await fetch(`http://localhost:5000/search1/${key}`);
          result = await result.json();
          setHasSearched(true); // Set the flag indicating that search has been performed
          if (result) {
              setProducts(result);
          }
      }
  };

  return (
      <div className="electriciansContainer11223">
          <button className="filterButton44556" onClick={filterData}>
              Filter Electricians
          </button>
          {
              hasSearched && products.length > 0 ? (
                  products.map((items) =>
                      <ul key={items._id} className="itemsList88900">
                          <li className="itemDetail66778">{items.FullName}</li>
                          <li className="itemDetail66778">{items.PhoneNumber}</li>
                          <li className="itemDetail66778">{items.Address}</li>
                          <li className="itemDetail66778">{items.Specialisation}</li>
                          <li className="itemDetail66778">{items.Experience}</li>
                          <li className="itemDetail66778">{items.ToolsOwned}</li>
                          <li className="itemDetail66778">{items.Availability}</li>
                      </ul>
                  )
              ) : (
                  hasSearched && <h1 className="noItemsFound33445">No customers in this category are listed yet.</h1>
              )
          }
      </div>
  );
}

export default Electricians1;