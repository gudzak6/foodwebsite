import Link from "next/link";
import BetaSignupForm from "@/components/BetaSignupForm";

export default function Home() {
  return (
    <main>
      <header className="py-6">
        <div className="container-base flex items-center justify-between">
          <div className="text-base font-semibold text-white">Carty</div>
          <nav className="flex items-center gap-4 text-sm text-white/80">
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a
              href="#beta"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container-base">
          <div className="hero-wrap">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              The AI Assistant for grocery shopping
            </h1>
            <p className="text-lg text-white/80">
              A Chrome extension that analyzes your cart and gives instant
              nutrition feedback, simple swaps, and a clear score — in seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#beta"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-ink-900"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-ink-100 bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-600 p-2 shadow-xl">
              <div className="overflow-hidden rounded-[28px] bg-black">
                <video
                  className="aspect-video h-auto w-full object-cover"
                  poster="/video-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="beta" className="section">
        <div className="container-base grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Join the beta</h2>
            <p className="text-sm text-white/80">
              We’re inviting a small group first to perfect the shopping
              experience. Reach out to joseph.gudzak@gmail.com for early access.
            </p>
          </div>
          <BetaSignupForm />
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container-base">
          <div className="rounded-[32px] bg-gradient-to-r from-[#9654dc] via-[#6256d7] to-[#3c62e3] px-6 py-12 text-white md:px-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-4xl font-semibold md:text-5xl">FAQ</h2>
              <p className="mt-3 text-sm text-white/80">
                Everything you need to know about Carty.
              </p>
            </div>
            <div className="mt-10 grid gap-4">
              {[
                {
                  q: "Is this medical advice?",
                  a: "No. We provide general nutrition guidance, not medical advice."
                },
                {
                  q: "Do you store my cart?",
                  a: "For MVP we only store your email. Later we may add opt-in history."
                },
                {
                  q: "Is it free?",
                  a: "The beta is free while we build the product."
                }
              ].map((item) => (
                <details
                  key={item.q}
                  className="rounded-3xl border border-white/30 bg-white/10 px-6 py-5 text-left backdrop-blur"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold">
                    {item.q}
                    <span className="text-2xl">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-white/80">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-600 py-6 text-white">
        <div className="container-base flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:joseph.gudzak@gmail.com" className="font-semibold">
              joseph.gudzak@gmail.com
            </a>
            <a href="https://twitter.com/" className="opacity-90 hover:opacity-100">
              Twitter
            </a>
            <a href="https://linkedin.com/" className="opacity-90 hover:opacity-100">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs opacity-90">
            <span>© 2026 Carty</span>
            <Link href="/privacy" className="hover:opacity-100">
              Privacy
            </Link>
            <span className="opacity-80">Terms</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
