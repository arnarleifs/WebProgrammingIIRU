export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <div className="flex flex-col items-center text-center pt-8">
      <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-3">
        Booking Confirmed!
      </h2>
      <p className="text-slate-600 mb-6">
        Your tickets have been booked successfully. Check your email for details.
      </p>
      {ref && (
        <div className="rounded-lg bg-white border border-slate-200 px-6 py-4 mb-8 w-full max-w-sm">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Booking Reference
          </p>
          <p className="font-mono text-sm text-slate-900 font-medium break-all">
            {ref}
          </p>
        </div>
      )}
      <a
        href="/"
        className="inline-block rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
      >
        Back to Home
      </a>
    </div>
  );
}
