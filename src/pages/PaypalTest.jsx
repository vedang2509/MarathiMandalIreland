import { useEffect } from "react";

export default function PaypalTest() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=YOUR_SANDBOX_CLIENT_ID&currency=EUR";
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "MMI Test Payment",
                amount: {
                  value: "10.00",
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(() => {
            alert("✅ Test payment successful!");
          });
        },
        onCancel: () => {
          alert("❌ Payment cancelled");
        },
        onError: (err) => {
          console.error(err);
          alert("⚠️ Payment error");
        },
      }).render("#paypal-button-container");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="page">
      <h1>PayPal Test Page</h1>

      <p>
        This page is for testing PayPal integration using the PayPal Sandbox.
        No real money is involved.
      </p>

      <div
        id="paypal-button-container"
        style={{ marginTop: "2rem" }}
      ></div>
    </section>
  );
}
