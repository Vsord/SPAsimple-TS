import React, { useEffect, useContext } from "react";
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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        if (res.status <= 200 && res.status < 300) {
          return res.json();
        } else {
          const err = new Error("Something went wrong...");
          throw err;
        }
      })
      .then((products: ProductT[]) => setProducts(products));
  }, [setProducts]);

  console.log(products);

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
