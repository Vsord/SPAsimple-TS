import React from "react";
import styles from "./ProductsCard.module.scss";

const ProductsCard = ({ product }: any) => {
  return (
    <>
      <div className={styles.cardBlock} key={product.id}>
        <div className={styles.cardBlockTop}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.cardBlockBottom}>
          <h3>{product.title}</h3>
          <h3>Price: {product.price}$</h3>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
