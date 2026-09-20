"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en-MT">
      <body style={{ margin: 0, background: "#0a0a0a", color: "#f5f2ec", fontFamily: "Arial, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
          <div>
            <p style={{ color: "#d9a441", textTransform: "uppercase", letterSpacing: ".2em" }}>Prego Bar & Grill</p>
            <h1>Something went wrong.</h1>
            <p style={{ opacity: 0.7 }}>Please reload or try again.</p>
            <button type="button" onClick={reset} style={{ marginTop: 16, padding: "14px 24px", border: "1px solid #d9a441", background: "transparent", color: "#f2c877", cursor: "pointer" }}>Try Again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
