import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

export default function PaypalTest() {
  return (
    <section className="page">
      <h1>PayPal Test Page</h1>

      <p>
        This page is for testing PayPal integration using the PayPal Sandbox.
      </p>

      <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
        <PayPalScriptProvider
          options={{
            "client-id": "sb-kn9wk16957838@business.example.com",
            currency: "EUR",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "MMI PayPal Test Payment",
                    amount: {
                      value: "10.00",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(() => {
                alert("✅ Test payment successful!");
              });
            }}
            onCancel={() => {
              alert("❌ Payment cancelled");
            }}
            onError={(err) => {
              console.error(err);
              alert("⚠️ Payment error");
            }}
          />
        </PayPalScriptProvider>
      </div>
    </section>
  );
}
