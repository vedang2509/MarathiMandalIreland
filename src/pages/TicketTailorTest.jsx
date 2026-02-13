export default function TicketTailorTest() {
  return (
    <section className="page">
      <h1>Ticket Tailor Checkout – Test Page</h1>

      <p>
        This page is for testing the embedded Ticket Tailor checkout.
        Payments, tickets, and confirmations are handled entirely by
        Ticket Tailor.
      </p>

      <div
        style={{
          marginTop: "2rem",
          width: "100%",
          height: "900px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          title="Ticket Tailor Checkout"
          src="https://www.tickettailor.com/events/marathimandalireland1/2046923"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="payment"
        ></iframe>
      </div>
    </section>
  );
}
