import React, { useState } from 'react';
import './App.css';
import visaSrc from "./visa.png";
import { transform, addBlank } from "./validate";

function Card() {
  const [cardNumber, setCardNumber] = useState("");
  const [ccvNumber, setCcvNumber] = useState("");
  const [isBopomo, toggleBopomo] = useState(false);
  const [isExpand, toggleExpand] = useState(false);
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
          maxLength={19}
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          onCompositionStart={() => {
            toggleBopomo(true);
          }}
          onCompositionEnd={() => {
            toggleBopomo(false);
            setCardNumber(addBlank(transform(cardNumber)))
          }}
          onChange={(e) => {
            const input = e.target.value;
            setCardNumber(input)
            if (!isBopomo) {
              setCardNumber(addBlank(transform(input)))
            }
          }}
        ></input>
      </div>
      <div className="expirationCcv">
        <div>
          <div>Expiration</div>
          <div className="expiration">
            <div className="monthButton">
              <button onClick={() => { toggleExpand(!isExpand) }}>month</button>
              {
                (isExpand) ? (
                  <div className="list">
                    <div>January</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                    <div>February</div>
                  </div>
                ) : (
                  null
                )
              }
            </div>
            <input type="text" name="year" placeholder="2015" />
          </div>
        </div>
        <div>
          <div>ccv</div>
          <input
            type="text"
            name="ccvNumber"
            placeholder="000"
            value={ccvNumber}
            onChange={(e) => { setCcvNumber(e.target.value) }}
          />
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
