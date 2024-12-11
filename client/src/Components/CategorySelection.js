import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CategorySelection.css';
import emailjs from "emailjs-com"; // Import

function CategorySelection() {
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const meetingLink = "http://localhost/Location"; // Replace with dynamic meeting link if needed
  const [emailSent, setEmailSent] = useState(false); // Track email status

  const filterData = async () => {
    let key = "yes";
    if (key) {
      let result = await fetch(`http://localhost:5000/search2/${key}`);
      result = await result.json();
      setHasSearched(true);
      if (result) {
        setProducts(result);
      }
    }
  };

  const sendEmail = (recipientEmail, recipientName) => {
    const templateParams = {
      to_name: recipientName, // Recipient's name
      meeting_link: meetingLink, // Meeting link
      to_email: recipientEmail, // Recipient's email
      from_name: "xyz", // Your name
      message: "Here is the link to join the meeting.",
    };

    emailjs
      .send(
        "service_yh4gxva", // Replace with your EmailJS service ID
        "template_azq4nj9", // Replace with your EmailJS template ID
        templateParams,
        "0byiYl0nzuLlAoS8Q" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setEmailSent(true); // Update email sent status
        },
        (error) => {
          console.error("Failed to send email.", error);
          setEmailSent(false); // Reset email sent status on failure
        }
      );
  };

  return (

    <div className="main566">
    <div className="main-sub566">
    <div className="categoryContainer8421">
      {/* Category Boxes */}
      <div className="categoryBox8421">
        <img src="/images/icons8-plumber-50.png" alt="Plumber" className="categoryImage8421" />
        <h3>Plumbers</h3>
        <p>Expert plumbers available for pipe fittings, leak repairs, and maintenance.</p>
        <Link to="/PlumberInterest">View Plumbers</Link>
      </div>

      <div className="categoryBox8421">
        <img src="/images/icons8-electrician-64.png" alt="Electrician" className="categoryImage8421" />
        <h3>Electricians</h3>
        <p>Reliable electricians for installations, wiring, and electrical repairs.</p>
        <Link to="/ElectricainInterest">View Electricians</Link>
      </div>

      <div className="categoryBox8421">
        <img src="/images/icons8-mechanic-50.png" alt="Mechanic" className="categoryImage8421" />
        <h3>Mechanics</h3>
        <p>Professional mechanics for vehicle servicing and repairs.</p>
        <Link to="/AcMechanicinterest">View Mechanics</Link>
      </div>

      <div className="categoryBox8421">
        <img src="/images/ac.png" alt="AC Technician" className="categoryImage8421" />
        <h3>AC Technicians</h3>
        <p>Certified AC technicians for installation, servicing, and troubleshooting.</p>
        <Link to="/AcTechnicians">View AC Technicians</Link>
      </div>

      <div className="categoryBox8421">
        <img src="/images/carpenter.png" alt="Carpenter" className="categoryImage8421" />
        <h3>Carpenters</h3>
        <p>Skilled carpenters for furniture making, repairs, and woodwork services.</p>
        <Link to="/carpenters">View Carpenters</Link>
      </div>

      <div className="categoryBox8421">
        <img src="/images/pest-control.png" alt="Pest Control" className="categoryImage8421" />
        <h3>Pest Control</h3>
        <p>Efficient pest control services to keep your home safe and hygienic.</p>
        <Link to="/pest-Control">View Pest Control</Link>
      </div>

      <div className="categoryBox8421">
        <img src="/images/painter.png" alt="Painter" className="categoryImage8421" />
        <h3>Painters</h3>
        <p>Experienced painters to give your walls a fresh and vibrant look.</p>
        <Link to="/painters">View Painters</Link>
      </div>
      </div>

      {/* Emergency Candidates Button */}
      <button className="emergencyButton8421" onClick={filterData}>
        Show Emergency Candidates
      </button>
      </div>


      {/* Emergency Candidates Section */}
      <div className="emergencyCandidates8421">
        {hasSearched && products.length > 0 ? (
          products.map((item) => (
            <ul key={item._id}>
              <li>{item.FullName}</li>
              <li>{item.Email}</li>
              <li>{item.Address}</li>
              <li>{item.ServiceCategory}</li>
              <li>{item.Budget}</li>
              <li>{item.ProblemDStartedOn}</li>
              <li>
              <button
                className="plumberButton4387"
                onClick={() => sendEmail(item.Email, item.FullName)}
              >
                Send Email
              </button>
            </li>
            <li className="plumberListItem4387">
              <button className="plumberButton4387">
                <a
                  className="plumberLinkButton4387"
                  href="http://localhost:3000/Location"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Location
                </a>
              </button></li>
            </ul>
          ))
        ) : (
          hasSearched && <h1>No Emergency Works Yet.</h1>
        )}
      </div>
    </div>
  );
}

export default CategorySelection;
