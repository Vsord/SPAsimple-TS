import axios from "axios";
import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import productsContext from "./context/context";
import { ContextT } from "./models/ContextT";
import { ProductT } from "./models/ProductT";
import Home from "./view/Home/Home";
import Products from "./view/Products/Products";

function App() {
  const { setProducts } = useContext(productsContext) as ContextT;

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await axios.get<ProductT[]>(
          "https://fakestoreapi.com/products/"
        );
        setProducts(response.data);
      };
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  }, [setProducts]);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
