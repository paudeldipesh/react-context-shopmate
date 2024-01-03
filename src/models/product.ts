export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: {
    products: Product[];
  };
}

interface RemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: {
    products: Product[];
  };
}

interface UpdateTotalAction {
  type: "UPDATE_TOTAL";
  payload: {
    total: number;
  };
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateTotalAction;
