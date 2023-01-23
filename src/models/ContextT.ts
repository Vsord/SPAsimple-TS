import { ProductT } from "./ProductT";

export type ContextT = {
  products: ProductT[];
  setProducts: (arr: ProductT[]) => void;
  status: number;
  setStatus: (status: number) => void;
};
