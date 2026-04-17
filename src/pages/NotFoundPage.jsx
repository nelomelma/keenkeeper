import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] container-width items-center justify-center py-16">
      <div className="card-shadow soft-border w-full max-w-xl rounded-2xl bg-white p-10 text-center">
        <p className="text-7xl font-extrabold text-[#275d47]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-800">Page not found</h1>
        <p className="mt-3 text-slate-500">
          The page you are looking for does not exist or the route is invalid.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-[#275d47] px-6 py-3 font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}