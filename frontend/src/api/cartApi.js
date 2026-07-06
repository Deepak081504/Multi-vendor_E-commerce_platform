import axiosInstance from "../services/axiosInstance";

export const getCart = async () => {
  return await axiosInstance.get(
    "/cart"
  );
};

export const addToCart = async (
  productId,
  quantity
) => {
  return await axiosInstance.post(
    "/cart",
    {
      product_id: productId,
      quantity: quantity
    }
  );
};

export const removeFromCart = async (
  cartId
) => {
  return await axiosInstance.delete(
    `/cart/${cartId}`
  );
};