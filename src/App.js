import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { ResponsiveProvider } from "./ResponsiveContext/ResponsiveContext";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./pages/Results/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ResponsiveProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<SearchBar />} />
          <Route exact path='Results' element={<Results />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ResponsiveProvider>
  );
}

export default App;
