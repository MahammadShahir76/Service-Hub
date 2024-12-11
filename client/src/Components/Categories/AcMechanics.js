import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import 
import './AcMechanics.css'

function AcMechanics() {
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if search is performed
  const meetingLink = "http://localhost/Location"; // Replace with dynamic meeting link if needed
  const [emailSent, setEmailSent] = useState(false); // Track email status

  const filterData = async () => {
    let key = "Ac Mechanics";
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      setHasSearched(true); // Set search flag to true
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
    <div className="acMechanicMain1845">
      <div className="acMechanicContainer1845">
        <button className="acMechanicButton1845" onClick={filterData}>Filter AC Mechanics</button>
        {hasSearched && products.length > 0 ? (
          products.map((item) => (
            <ul className="acMechanicList1845" key={item._id}>
              <li className="acMechanicListItem1845">{item.FullName}</li>
              <li className="acMechanicListItem1845 acMechanicEmail1845">{item.Email}</li>
              <li className="acMechanicListItem1845">{item.Address}</li>
              <li className="acMechanicListItem1845">{item.Budget}</li>
              <li className="acMechanicListItem1845">{item.Description}</li>
              <li className="acMechanicListItem1845">{item.ProblemDStartedOn}</li>
              <li className="acMechanicListItem1845">{item.problemImg}</li>
              <li className="acMechanicListItem1845">
                <button
                  className="acMechanicButton1845"
                  onClick={() => sendEmail(item.Email, item.FullName)}
                >
                  Send Email
                </button>
              </li>
              <li className="acMechanicListItem1845">
                <button className="acMechanicButton1845">
                  <a
                    className="acMechanicLinkButton1845"
                    href="http://localhost:3000/Location"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Location
                  </a>
                </button>
              </li>
            </ul>
          ))
        ) : (
          hasSearched && (
            <h1 className="acMechanicNoResults1845">No customers in this category are listed yet.</h1>
          )
        )}
        {emailSent && (
          <p className="acMechanicSuccessMessage1845">
            Email sent successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default AcMechanics;
