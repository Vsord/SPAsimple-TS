import React, { useContext } from "react";
import productsContext from "../../context/context";
import { ContextT } from "../../models/ContextT";
import { ProductT } from "../../models/ProductT";
import styles from "./Products.module.scss";

const Products = () => {
  const { products } = useContext(productsContext) as ContextT;

  const product = products.map((el: ProductT) => {
    if (el.id <= 8) {
      return (
        <div className={styles.productsImageBlock} key={el.id}>
          <img src={el.image} key={el.id} alt={el.title} />
          <h3>{el.title}</h3>
        </div>
      );
    }
  });

  return (
    <div className={styles.productsBlock}>
      <h1>Products page</h1>
      <div className={styles.products}>{product}</div>
    </div>
  );
};

export default Products;
