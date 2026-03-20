const outputItems = [
  {
    label: "AI Idea",
    value: "AI-powered fitness coach for busy professionals"
  },
  {
    label: "Market",
    value: "High demand, low competition"
  },
  {
    label: "Niche",
    value: "Remote workers"
  }
];

const featureItems = [
  {
    description:
      "Generate unique business ideas tailored to your interests in seconds.",
    key: "idea",
    title: "Instant Idea Generation"
  },
  {
    description:
      "Understand demand, competition, and potential before you build.",
    key: "market",
    title: "Market Insights"
  },
  {
    description:
      "Find profitable niches and opportunities you might have missed.",
    key: "niche",
    title: "Niche Discovery"
  }
] as const;

type FeatureKey = (typeof featureItems)[number]["key"];

function FeatureIcon({ kind }: { kind: FeatureKey }) {
  if (kind === "idea") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="stroke-current"
          d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (kind === "market") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="stroke-current"
          d="M4 19h16M7 16V9m5 7V5m5 11v-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="stroke-current"
        cx="12"
        cy="12"
        r="7"
        strokeWidth="1.8"
      />
      <circle
        className="stroke-current"
        cx="12"
        cy="12"
        r="3"
        strokeWidth="1.8"
      />
      <path
        className="stroke-current"
        d="M12 2v2M12 20v2M2 12h2M20 12h2"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_34%),radial-gradient(circle_at_80%_30%,_rgba(99,102,241,0.20),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#020617_45%,_#0f172a_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid w-full gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-slate-300/80 shadow-[0_0_24px_rgba(56,189,248,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Idea generation powered by AI
            </div>

            <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Generate startup ideas</span>
              <span className="block">in seconds using AI</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-300 sm:text-lg">
              Stop overthinking. Discover validated business ideas tailored to your interests.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_48px_rgba(34,211,238,0.30)] transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_22px_60px_rgba(34,211,238,0.36)]"
                type="button"
              >
                Generate Idea
              </button>
              <button
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur transition hover:bg-white/10"
                type="button"
              >
                View Demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Tailored niches
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Fast validation cues
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Built for founders
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/14 via-indigo-400/10 to-sky-400/12 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_25px_80px_rgba(2,6,23,0.65)] backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">IdeaForge AI</p>
                  <p className="mt-1 text-xs text-slate-400">Startup idea engine</p>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  Live Output
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-inner shadow-cyan-500/5">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                  Explore a niche
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    aria-label="Enter your interest"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
                    placeholder="Enter your interest..."
                    readOnly
                    type="text"
                  />
                  <button
                    className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    type="button"
                  >
                    Generate
                  </button>
                </div>
              </div>

              <div className="mt-5 space-y-4 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/60 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">AI Output</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Validated opportunity snapshot
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                    Ready
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-100/80">
                    Generating insights
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-300/90 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-cyan-300/65 animate-pulse" />
                    <span className="h-2 w-2 rounded-full bg-cyan-300/40 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-3">
                  {outputItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.28)]"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white sm:text-[15px]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Match Quality
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">92%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Time to Insight
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">12 sec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-6 sm:px-8 lg:px-12 lg:pb-32">
        <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-56 max-w-3xl rounded-full bg-cyan-400/6 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/70">
              Why IdeaForge AI
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything you need to validate your next startup idea
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From idea generation to market insights &mdash; all in one place.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featureItems.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.34)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/30 hover:shadow-[0_24px_70px_rgba(8,145,178,0.16)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_36%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-200 shadow-[0_0_28px_rgba(56,189,248,0.14)]">
                    <FeatureIcon kind={feature.key} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
