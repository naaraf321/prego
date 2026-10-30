import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <div className="wrap not-found-inner">
          <span className="label">404 — Wrong turn</span>
          <h1 className="display display--sm">This table isn&apos;t here.</h1>
          <p>The page you requested could not be found. Head back to Prego or explore the menu.</p>
          <div className="not-found-actions">
            <Link href="/" className="btn btn--gold"><span>Back to Prego</span></Link>
            <Link href="/#menu" className="btn"><span>View Menu</span></Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
