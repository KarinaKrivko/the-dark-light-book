import AboutAuthor from "./components/AboutAuthor";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Companies from "./components/Companies";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/author" element={<AboutAuthor />} />
        <Route path="/companies" element={<Companies />} />
        {/* <Route path="/category/:category" element={<ProductsPage />} /> */} */}
        {/* <Route path="/*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
