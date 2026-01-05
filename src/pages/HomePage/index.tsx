import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Home</h1>
      <p className="text-zinc-600">
        React + TS + Tailwind + Router + Lucide + alias <code className="rounded bg-zinc-100 px-1">@/</code>
      </p>

      <Link
        to="/about"
        className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Go to About <ArrowRight size={16} />
      </Link>
    </div>
  );
}
