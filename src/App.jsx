import { useLocation, Outlet } from "react-router-dom";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { getTitleByPath } from "./constants/navigations";
import DarkModeSync from "./components/system/DarkModeSync";
import Background from "./components/layout/Background";
import Header from "./components/layout/Header";
import MobileMenuOverlay from "./components/layout/MobileMenuOverlay";
import Footer from "./components/layout/Footer";

function App() {
  // Update the document title based on the current route
  const { pathname } = useLocation();
  useDocumentTitle(getTitleByPath(pathname));

  return (
    <>
      {/* Synchronizes the dark mode state with the HTML root element */}
      <DarkModeSync />

      {/* Global background gradient for the app */}
      <Background />

      <div className="flex min-h-screen flex-col">
        <Header />

        {/* Overlay displayed when the mobile menu is open */}
        <MobileMenuOverlay />

        <main className="mx-auto w-full max-w-6xl flex-1 px-10 py-18">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
