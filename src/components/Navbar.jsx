import { BarChart3, Clock3, Home, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/timeline", label: "Timeline", icon: Clock3 },
  { to: "/stats", label: "Stats", icon: BarChart3 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ${
      isActive
        ? "bg-[#275d47] text-white"
        : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 container-width items-center justify-between">
        <NavLink to="/" className="text-[30px] font-extrabold tracking-tight text-slate-800">
          Keen<span className="text-[#275d47]">Keeper</span>
        </NavLink>

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex container-width flex-col gap-2 py-4">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                <Icon size={16} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}