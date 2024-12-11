import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css'; // Add this line to link the CSS file

function AdminPage() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        getReview();
    }, []);

    const getReview = async () => {
        let result = await fetch('http://localhost:5000/Admino');
        result = await result.json();
        setResult(result);
    };

    const deleteProduct = async (id) => {
        let result1 = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result1 = await result1.json();
        if (result1) {
            getReview();
        }
    };

    return (
        <div className="serviceDetailsContainer4827">
            <h1 className="serviceDetailsTitle4827">Service Providers Details</h1>
            <div>
                {result.length > 0 ? (
                    result.map((items, index) => (
                        <div key={index} className="serviceCard4827">
                            <h3>Name: {items.Fullname}</h3>
                            <p>Name: {items.FullName}</p>
                            <p>PhoneNumber: {items.PhoneNumber}</p>
                            <p>Address: {items.Address}</p>
                            <p>Category: {items.Servicecategory}</p>
                            <p>Specialisation: {items.Specialisation}</p>
                            <p>Experience: {items.Experience}</p>
                            <p>Tools: {items.Tools}</p>
                            <p>Availability: {items.Availability}</p>
                            <div className="serviceCardButtons4827">
                                <button onClick={() => deleteProduct(items._id)}>delete</button>
                                <Link to={"/update/" + items._id}>update</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No Reviews Found</h2>
                )}
            </div>
        </div>
    );
}

export default AdminPage;
