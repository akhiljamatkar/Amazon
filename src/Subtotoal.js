import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotoal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 item):
              <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>
        <b>Proceed to Checkout</b>
      </button>
    </div>
  );
}

export default Subtotoal;
