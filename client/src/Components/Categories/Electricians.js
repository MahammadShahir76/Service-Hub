import React, { useState } from "react";
 import emailjs from "emailjs-com"; // Import emailjs
import './Electricians.css'

function Electricians() {
  const [products, setProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if search is performed
  const meetingLink = "http://localhost/Location"; // Replace with dynamic meeting link if needed
  const [emailSent, setEmailSent] = useState(false); // Track email status

  const filterData = async () => {
    let key = "Electricians";
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
    <div className="electricianMain9837">
      <div className="electricianContainer9837">
        <button className="electricianButton9837" onClick={filterData}>Filter Electricians</button>
        {hasSearched && products.length > 0 ? (
          products.map((item) => (
            <ul className="electricianList9837" key={item._id}>
              <li className="electricianListItem9837">{item.FullName}</li>
              <li className="electricianListItem9837 electricianEmail9837">{item.Email}</li>
              <li className="electricianListItem9837">{item.Address}</li>
              <li className="electricianListItem9837">{item.Budget}</li>
              <li className="electricianListItem9837">{item.Description}</li>
              <li className="electricianListItem9837">{item.ProblemDStartedOn}</li>
              <li className="electricianListItem9837">{item.problemImg}</li>
              <li className="electricianListItem9837">
                <button
                  className="electricianButton9837"
                  onClick={() => sendEmail(item.Email, item.FullName)}
                >
                  Send Email
                </button>
              </li>
              <li className="electricianListItem9837">
                <button className="electricianButton9837">
                  <a
                    className="electricianLinkButton9837"
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
            <h1 className="electricianNoResults9837">No customers in this category are listed yet.</h1>
          )
        )}
        {emailSent && (
          <p className="electricianSuccessMessage9837">
            Email sent successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default Electricians;
