import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ResponsiveProvider } from "./ResponsiveContext/ResponsiveContext";

function App() {
  return (
    <ResponsiveProvider>
      <NavBar />
      <Footer />
    </ResponsiveProvider>
  );
}

export default App;
