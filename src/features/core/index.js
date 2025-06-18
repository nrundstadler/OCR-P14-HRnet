export * from "./components/layout";
export * from "./components/system/";

export { useDocumentTitle } from "./hooks/useDocumentTitle";

export { NAV_LINKS, getTitleByPath } from "./constants/navigations";

// State management
export {
  uiSlice,
  toggleDarkMode,
  setMenuMobileOpen,
  selectDarkMode,
  selectMenuMobileOpen,
} from "./slices/uiSlice";
