import { UserPlus } from "lucide-react";

export default function Banner() {
  return (
    <section className="rounded-2xl bg-transparent py-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 md:text-6xl">
        Friends to keep close in your life
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>
      <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#275d47] px-6 py-3 text-sm font-semibold text-white hover:opacity-95">
        <UserPlus size={18} />
        Add a Friend
      </button>
    </section>
  );
}