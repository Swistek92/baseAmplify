import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51LQHQFJY9lyn3XCq6r8n60xqY02RvScOFyCbNbt9tWCedmR7A9znTy0K3B2WVzI0RN0PX3vrWCnr9XUVqJ1Aq0bW00bD2kZTic"
  );

  return (
    <section className='checkout-wrapper'>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;
