import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card w-full max-w-md p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mx-auto mb-6">
          <i className="bi bi-exclamation-triangle text-3xl text-violet-400"></i>
        </div>
        <span className="section-badge">404</span>
        <h1 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
          Profile not found
        </h1>
        <p className="mt-4 text-slate-400 leading-relaxed">
          The portfolio you requested is not currently configured.
        </p>
        <Link href="/" className="btn-primary mt-6">
          <i className="bi bi-house"></i>
          Return to portfolio hub
        </Link>
      </div>
    </main>
  );
}
