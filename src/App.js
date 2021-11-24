import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ResponsiveProvider } from "./ResponsiveContext/ResponsiveContext";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <ResponsiveProvider>
      <NavBar />
      <SearchBar />
      <Footer />
    </ResponsiveProvider>
  );
}

export default App;
