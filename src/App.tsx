import React, { useState } from 'react';
import './App.css';
import visaSrc from "./visa.png";

function Card() {
  const [cardNumber, setCardNumber] = useState("");
  const [ccvNumber, setCcvNumber] = useState("");
  return (
    <article className="card">
      <div>
        <div className="paymentDetails">Payment Details</div>
        <img className="VISA" src={visaSrc} alt="VISA" />
      </div>
      <div>
        <div>Card Number</div>
        <input
          type="text"
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value)
          }}
        ></input>
      </div>
      <div>
        <div>
          <div>Expiration</div>
          <div className="expiration">
            <input type="text" name="month" placeholder="January"></input>
            <input type="text" name="year" placeholder="2015"></input>
          </div>
        </div>
        <div>
          <div>ccv</div>
          <input type="text" name="ccvNumber" placeholder="000"
            value={ccvNumber}
            onChange={(e) => {
              setCcvNumber(e.target.value)
            }}
          ></input>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <article className="app">
      <Card />
    </article>
  );
}

export default App;
