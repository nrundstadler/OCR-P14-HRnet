import { useLocation } from "react-router-dom";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { getTitleByPath } from "./constants/navigations";
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  // // Update the document title
  const { pathname } = useLocation();
  useDocumentTitle(getTitleByPath(pathname));

  return (
    <>
      <Background />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-10 py-18">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
