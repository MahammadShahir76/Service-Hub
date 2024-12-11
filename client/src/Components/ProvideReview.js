import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProvideReview.css';

const StarRating = ({ setReview, reviewValue }) => {
    const [rating, setRating] = useState(reviewValue || 0);

    const handleRating = (value) => {
        setRating(value);
        setReview(value); // Set the review state to the selected star rating
    };

    return (
        <div className="starRating9347">
            {[...Array(10)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        className={`star9347 ${starValue <= rating ? 'starActive9347' : 'starInactive9347'}`}
                        onClick={() => handleRating(starValue)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

function ProvideReview() {
    const [Fullname, setsetFullname] = useState('');
    const [ServiceCategory, setServiceCategory] = useState('');
    const [review1, setReview1] = useState('');
    const [review2, setReview2] = useState('');
    const [review3, setReview3] = useState('');
    const [description, setDescription] = useState('');
    const [Error, setError] = useState(false);

    const addReview = async () => {
        if (!Fullname || !ServiceCategory || !review1 || !review2 || !review3 || !description) {
            setError(true);
            return false;
        }

        let result = await fetch('http://localhost:5000/add-review', {
            method: 'post',
            body: JSON.stringify({ Fullname, ServiceCategory, review1, review2, review3, description }),
            headers: { 'Content-type': 'application/json' }
        });
        result = await result.json();
    };

    return (
      <div className="main6">
        <div className="reviewFormContainer9347">
            <h1 className="reviewTitle9347">Service provider Review</h1>

            <input
                type="text"
                placeholder="Enter worker name"
                className="reviewInput9347"
                onChange={(e) => setsetFullname(e.target.value)}
                value={Fullname}
            />
            {Error && !Fullname && <span className="errorText9347">Enter valid name</span>}

            <input
                type="text"
                placeholder="Enter  category"
                className="reviewInput9347"
                onChange={(e) => setServiceCategory(e.target.value)}
                value={ServiceCategory}
            />
            {Error && !ServiceCategory && <span className="errorText9347">Enter valid domain</span>}

            {/* Star rating for Review 1 */}
            <h3 className="reviewHeading9347">Review 1</h3>
            <StarRating setReview={setReview1} reviewValue={review1} />
            {Error && !review1 && <span className="errorText9347">Enter valid review</span>}

            {/* Star rating for Review 2 */}
            <h3 className="reviewHeading9347">Review 2</h3>
            <StarRating setReview={setReview2} reviewValue={review2} />
            {Error && !review2 && <span className="errorText9347">Enter valid review</span>}

            {/* Star rating for Review 3 */}
            <h3 className="reviewHeading9347">Review 3</h3>
            <StarRating setReview={setReview3} reviewValue={review3} />
            {Error && !review3 && <span className="errorText9347">Enter valid review</span>}

            <input
                type="text"
                placeholder="Overall review"
                className="reviewInput9347"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            {Error && !description && <span className="errorText9347">Enter valid description</span>}

            <button type="button" className="reviewButton9347" onClick={addReview}>
                Add review
            </button>
            <Link to="/ReviewSuccesful" className="reviewLink9347">Next</Link>
        </div>
        </div>
    );
}

export default ProvideReview;
