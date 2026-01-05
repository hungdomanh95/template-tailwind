// Header component
import { Home as HomeIcon, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

const linkBase =
  "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition";
const linkInactive = "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900";
const linkActive = "bg-zinc-900 text-white";


export default function Header() {
  return <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-zinc-900 text-white">
                <HomeIcon size={18} />
              </div>
              <div className="font-semibold">My App</div>
            </div>

            <nav className="flex items-center gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                <HomeIcon size={16} />
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                <Info size={16} />
                About
              </NavLink>
            </nav>
          </div>
        </header>
}
