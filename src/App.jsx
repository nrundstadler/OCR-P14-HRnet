import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-10 py-18">
          <Homepage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
