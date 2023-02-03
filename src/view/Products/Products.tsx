import React, { useContext } from "react";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import productsContext from "../../context/context";
import { ContextT } from "../../models/ContextT";
import { ProductT } from "../../models/ProductT";
import styles from "./Products.module.scss";

const Products = () => {
  const { products } = useContext(productsContext) as ContextT;

  const product = products.map((item: ProductT) => {
    if (item.id <= 8) {
      return <ProductsCard product={item} key={item.id} />;
    }
  });

  return (
    <div className={styles.products}>
      <h1>Products page</h1>
      <div className={styles.productsBlock}>{product}</div>
    </div>
  );
};

export default Products;
