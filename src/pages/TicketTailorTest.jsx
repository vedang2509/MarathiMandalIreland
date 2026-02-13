import { useEffect } from "react";

export default function TicketTailorTest() {
  useEffect(() => {
    // Load Ticket Tailor widget script
    const script = document.createElement("script");
    script.src = "https://widget.tickettailor.com/v1/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.TicketTailorWidget) {
        new window.TicketTailorWidget({
          eventId: "2046923", // ✅ YOUR EVENT ID
          containerId: "tt-widget",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="page">
      <h1>Ticket Tailor Checkout – Test Page</h1>

      <p>
        This page is for testing the embedded Ticket Tailor checkout.
        Payments, tickets, and confirmations are handled entirely by
        Ticket Tailor.
      </p>

      <div
        id="tt-widget"
        style={{
          marginTop: "2rem",
          minHeight: "600px",
        }}
      ></div>
    </section>
  );
}
