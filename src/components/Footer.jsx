import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#245a45] px-4 py-14 text-white">
      <div className="mx-auto container-width">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-extrabold tracking-tight">KeenKeeper</h2>

          <p className="mt-5 max-w-2xl text-sm text-emerald-50/85">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>

          <p className="mt-8 text-2xl font-semibold">Social Links</p>

          <div className="mt-5 flex items-center gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-emerald-50/70">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}