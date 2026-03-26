"use client";

const steps = [
  { label: "Concert", path: "/booking/event" },
  { label: "Tickets", path: "/booking/tickets" },
  { label: "Details", path: "/booking/personal" },
  { label: "Review", path: "/booking/review" },
];

export function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center gap-2">
        {steps.map((step, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;
          return (
            <li key={step.path} className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                  isCompleted
                    ? "bg-indigo-600 text-white"
                    : isCurrent
                    ? "border-2 border-indigo-600 text-indigo-600"
                    : "border-2 border-slate-200 text-slate-400"
                }`}
              >
                {isCompleted ? (
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  stepNum
                )}
              </span>
              <span
                className={`hidden text-xs sm:block ${
                  isCurrent ? "font-medium text-slate-900" : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <span className="h-px w-6 bg-slate-200 sm:w-10" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
