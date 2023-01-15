import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsContext from "./context/context";
import { ProductT } from "./models/ProductT";
import reportWebVitals from "./reportWebVitals";

const Main = () => {
  const [products, setProducts] = useState<Array<ProductT>>([]);
  return (
    <React.StrictMode>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <App />
      </ProductsContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Main />);

reportWebVitals();
