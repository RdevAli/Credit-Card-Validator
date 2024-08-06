import React, { useState } from "react";
import validator from "validator";
import card from "./assets/cc.png";
import "./credform.css";

const PaymentDetails = () => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateCreditCard = (value) => {
    setCreditCardNumber(value);

    if (validator.isCreditCard(value)) {
      setIsValid(true);
      setErrorMessage(""); // Clear the error message if the card is valid
    } else {
      setIsValid(false);
      setErrorMessage("Enter a valid credit card number!"); // Set an error message if invalid
    }
  };

  return (
    <div className="payment-container">
      <div className="card">
        <div className="card-details">
          <div className="card-header">
            <h3>Payment details</h3>
          </div>
          <div className="card-body">
            <div className="credit-card-image">
              <img src={card} alt="Credit Card" />
            </div>
            <div className="input-group">
              <label htmlFor="creditCardNumber">Card number</label>
              <input
                type="text"
                id="creditCardNumber"
                value={creditCardNumber}
                onChange={(e) => validateCreditCard(e.target.value)}
                placeholder="1234 5678 9012 3456"
              />
              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}
            </div>
          </div>
          <div className="card-footer">
            <button className="save-button" disabled={!isValid}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
