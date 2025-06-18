import { useDispatch, useSelector } from "react-redux";
import { setMenuMobileOpen, selectMenuMobileOpen } from "../../slices/uiSlice";

const MobileMenuOverlay = () => {
  const isMenuMobileOpen = useSelector(selectMenuMobileOpen);
  const dispatch = useDispatch();

  return (
    <div
      role="presentation"
      className={`fixed inset-x-0 top-18 bottom-0 z-40 h-[calc(100vh-4.5rem)] bg-zinc-700/20 backdrop-blur-sm transition-opacity duration-300 md:hidden dark:bg-zinc-300/20 ${
        isMenuMobileOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onClick={() => dispatch(setMenuMobileOpen(false))}
      aria-hidden="true"
    />
  );
};

export default MobileMenuOverlay;
