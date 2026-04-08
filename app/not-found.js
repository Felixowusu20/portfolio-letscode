import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>Profile not found</h1>
      <p>The portfolio you requested is not currently configured.</p>
      <Link href="/">Return to portfolio hub</Link>
    </main>
  );
}
