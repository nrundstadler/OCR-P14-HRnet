import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants/navigations";

const Nav = ({ isMenuMobileOpen, setIsMenuMobileOpen }) => {
  return (
    <>
      {/* Overlay mobile */}
      <div
        className={`fixed inset-x-0 top-18 bottom-0 z-40 h-[calc(100vh-4.5rem)] bg-zinc-700/20 backdrop-blur-sm transition-opacity duration-300 md:hidden dark:bg-zinc-300/20 ${
          isMenuMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Navigation mobile & desktop */}
      <nav
        className={`fixed top-18 right-0 z-50 h-[calc(100vh-4.5rem)] overflow-y-auto bg-white p-6 transition-transform duration-300 ease-out md:static md:top-auto md:right-auto md:h-auto md:w-auto md:transform-none md:bg-transparent md:p-0 dark:bg-zinc-700 ${isMenuMobileOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
        id="main-menu"
        aria-label="Main navigation"
      >
        <ul className="flex flex-col gap-8 md:flex-row">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                className="mr-6 block py-2 text-zinc-700 transition hover:text-zinc-950 md:mr-0 md:py-0 dark:text-zinc-300 dark:hover:text-zinc-400"
                to={link.to}
                onClick={() => isMenuMobileOpen && setIsMenuMobileOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
