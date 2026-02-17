import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalTest() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>PayPal Test Page</h1>

      <PayPalScriptProvider
        options={{
          "client-id": "Afrlr_fbIA7B4pRB4-C2LpJptKjLpZ7ZzjzACcJFNzCBJ106iHyFGxmiDz06DwYdFTQbUA4ctatdx80F",
          currency: "EUR",
          intent: "capture",
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          forceReRender={[Math.random()]}
          createOrder={(data, actions) =>
            actions.order.create({
              purchase_units: [
                {
                  amount: { value: "5.00" },
                },
              ],
            })
          }
          onApprove={(data, actions) =>
            actions.order.capture().then(() => {
              alert("Payment successful (Sandbox)");
            })
          }
        />
      </PayPalScriptProvider>
    </div>
  );
}
