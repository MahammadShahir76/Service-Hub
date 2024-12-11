import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import

import './Plumbers.css';

function Plumbers() {
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if search is performed
  const meetingLink = "http://localhost/Location"; // Replace with dynamic meeting link if needed
  const [emailSent, setEmailSent] = useState(false); // Track email status

  const filterData = async () => {
    let key = "Plumbing";
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
    <div className="plummain">
    <div className="plumberContainer4387">
      <button className="plumberButton4387" onClick={filterData}>Filter Plumbers</button>
      {hasSearched && products.length > 0 ? (
        products.map((item) => (
          <ul className="plumberList4387" key={item._id}>
            <li className="plumberListItem4387">{item.FullName}</li>
            <li className="plumberListItem4387 plumberEmail4387">{item.Email}</li>
            <li className="plumberListItem4387">{item.Address}</li>
            <li className="plumberListItem4387">{item.Budget}</li>
            <li className="plumberListItem4387">{item.Description}</li>
            <li className="plumberListItem4387">{item.ProblemDStartedOn}</li>
            <li className="plumberListItem4387">{item.problemImg}</li>
            <li className="plumberListItem4387">
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
              </button>
            </li>
          </ul>
        ))
      ) : (
        hasSearched && (
          <h1 className="plumberNoResults4387">No customers in this category are listed yet.</h1>
        )
      )}
      {emailSent && (
        <p className="plumberSuccessMessage4387">
          Email sent successfully!
        </p>
      )}
    </div>
    </div>
  );
}

export default Plumbers;
