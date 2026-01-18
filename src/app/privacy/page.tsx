export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="container-base space-y-6 text-ink-700">
        <div>
          <h1 className="text-3xl font-semibold text-ink-900">Privacy</h1>
          <p className="mt-2 text-sm text-ink-600">
            Last updated: January 18, 2026
          </p>
        </div>
        <div className="space-y-4 text-sm">
          <p>
            Cart Nutrition Analyzer collects your email address when you join
            the beta waitlist. We use it to send beta confirmations, access
            instructions, and product updates.
          </p>
          <p>
            We do not collect payment information. For the MVP, we do not store
            your cart contents or personal nutrition data.
          </p>
          <p>
            You can unsubscribe at any time using the link in our emails or by
            emailing us directly.
          </p>
        </div>
      </div>
    </main>
  );
}
