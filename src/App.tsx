import axios from "axios";
import React, { useEffect, useContext, useState, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import productsContext from "./context/context";
import { ContextT } from "./models/ContextT";
import { ProductT } from "./models/ProductT";

function App() {
  const { products, setProducts } = useContext(productsContext) as ContextT;
  const [status, setStatus] = useState(0);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await axios.get<ProductT[]>(
          "https://fakestoreapi.com/products/"
        );
        setProducts(response.data);
        setStatus(response.status);
      };
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer status={status} />
      </div>
    </BrowserRouter>
  );
}

export default App;
