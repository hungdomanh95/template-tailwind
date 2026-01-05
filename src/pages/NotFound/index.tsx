import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const err = useRouteError() as any;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Not found</h1>
      <p className="text-zinc-600">
        {err?.statusText || err?.message || "Page does not exist."}
      </p>

      <Link
        to="/"
        className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
