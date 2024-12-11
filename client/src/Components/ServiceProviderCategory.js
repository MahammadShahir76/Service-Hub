import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceProviderCategory.css'; // Importing CSS for styling

function ServiceProviderCategory() {
  return (
    <div className="service-provider-container">
      <h2>Service Categories</h2>
      <div className="card-container1">
        <div className="card1 plumbers">
          <i className="fas fa-wrench icon"></i>
          <Link to="/PlumbersDetails">Plumbers</Link>
        </div>
        <div className="card1 electricians">
          <i className="fas fa-bolt icon"></i>
          <Link to="/ElectricianDetails">Electricians</Link>
        </div>
        <div className="card1 ac-mechanics">
          <i className="fas fa-fan icon"></i>
          <Link to="/ACMechanicalDetails">AC Mechanics</Link>
        </div>
        <div className="card1 mechanics">
          <i className="fas fa-cogs icon"></i>
          <Link to="/AcMechanicinterest">Mechanics</Link>
        </div>
        <div className="card1 carpenters">
          <i className="fas fa-hammer icon"></i>
          <Link to="/carpenters">Carpenters</Link>
        </div>
        <div className="card1 pest-control">
          <i className="fas fa-bug icon"></i>
          <Link to="/pest-Control">Pest Control</Link>
        </div>
        <div className="card1 painters">
          <i className="fas fa-paint-roller icon"></i>
          <Link to="/painters">Painters</Link>
        </div>
      </div>
      <h3>See the service reviews here</h3>
      <Link to="/show-reviews" className="link-button1">See reviews</Link>
    </div>
  );
}

export default ServiceProviderCategory;