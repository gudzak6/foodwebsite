import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="section">
      <div className="container-base flex flex-col gap-6">
        <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-ink-900">
            You’re on the list!
          </h1>
          <p className="mt-3 text-sm text-ink-600">
            Check your inbox for a confirmation email. We’ll follow up with
            install instructions once your beta access is approved.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-900"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
