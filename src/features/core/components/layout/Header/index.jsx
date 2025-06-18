import { SunMoon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Nav from "./Nav";
import {
  toggleDarkMode,
  setMenuMobileOpen,
  selectMenuMobileOpen,
} from "../../../slices/uiSlice";

const Header = () => {
  const isMenuMobileOpen = useSelector(selectMenuMobileOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 flex h-18 items-center justify-between px-8 backdrop-blur-sm ${
        isMenuMobileOpen
          ? "bg-white md:bg-white/60 dark:bg-zinc-700"
          : "bg-white/60 dark:bg-zinc-700/50"
      }`}
    >
      {/* Logo and site name */}
      <Link className="flex items-center gap-x-1" to="/" aria-label="Home">
        <img src="/logo.png" alt="Logo HRnet" className="mr-4 h-12 w-12" />
        <span className="text-xl font-bold text-zinc-600 dark:text-zinc-300">
          Wealth Health
        </span>
      </Link>

      {/* Div with btn Dark Mode - Separator - Menu - reordered on desktop */}
      <div className="flex items-center gap-5 text-lg md:flex-row-reverse">
        {/* Dark mode button  */}
        <button
          type="button"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition hover:bg-zinc-700/5 dark:hover:bg-zinc-400/20"
          aria-label="Toggle dark mode"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <SunMoon className="h-5 w-5 stroke-zinc-700 dark:stroke-zinc-300" />
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-zinc-700/50 dark:bg-zinc-300/50"></div>

        {/* Hamburger menu button - only visible on mobile */}
        <button
          type="button"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition hover:bg-zinc-700/5 md:hidden dark:hover:bg-zinc-400/20"
          aria-label={isMenuMobileOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isMenuMobileOpen}
          aria-controls="main-menu"
          onClick={() => dispatch(setMenuMobileOpen(!isMenuMobileOpen))}
        >
          {isMenuMobileOpen ? (
            <X className="h-5 w-5 stroke-zinc-700 dark:stroke-zinc-300" />
          ) : (
            <Menu className="h-5 w-5 stroke-zinc-700 dark:stroke-zinc-300" />
          )}
        </button>

        {/* Navigation component */}
        <Nav />
      </div>
    </div>
  );
};

export default Header;
