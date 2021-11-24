import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ResponsiveProvider } from "./ResponsiveContext/ResponsiveContext";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./pages/Results/Results";

function App() {
  return (
    <ResponsiveProvider>
      <NavBar />
      {/* <SearchBar /> */}
      <Results />
      <Footer />
    </ResponsiveProvider>
  );
}

export default App;
