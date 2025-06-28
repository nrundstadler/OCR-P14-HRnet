import { useLocation, Outlet } from "react-router-dom";
import {
  useDocumentTitle,
  getTitleByPath,
  // System Components
  DarkModeSync,
  // Layout Components
  Background,
  Header,
  MobileMenuOverlay,
  Footer,
} from "./features/core/";

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

        <main className="mx-auto w-full flex-1 px-10 py-18">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
