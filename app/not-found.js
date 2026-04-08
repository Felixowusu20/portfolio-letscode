import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-10">
      <section className="template-panel w-full max-w-xl p-7 text-center md:p-10">
        <p className="template-subtitle">404</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-white md:text-4xl">
          Profile not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          The portfolio you requested is not currently configured.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Return to portfolio hub
        </Link>
      </section>
    </main>
  );
}
