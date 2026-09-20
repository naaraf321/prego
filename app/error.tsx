"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Prego page error", error);
  }, [error]);

  return (
    <main className="not-found" role="main">
      <div className="wrap not-found-inner">
        <span className="label">Something went wrong</span>
        <h1 className="display display--sm">We couldn&apos;t load this page.</h1>
        <p>Please try again. If the issue continues, you can still book directly through Tableo.</p>
        <div className="not-found-actions">
          <button className="btn btn--gold" type="button" onClick={reset}><span>Try Again</span></button>
          <a className="btn" href="/"><span>Back to Prego</span></a>
        </div>
      </div>
    </main>
  );
}
