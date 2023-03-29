import AboutAuthor from "./components/AboutAuthor";
import MainPage from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/author" element={<AboutAuthor />} />
        {/* <Route path="/basket" element={<BasketPage />} />
        <Route path="/category/:category" element={<ProductsPage />} /> */}
        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
