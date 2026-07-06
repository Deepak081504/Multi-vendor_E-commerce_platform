import axiosInstance from "../services/axiosInstance";

export const getProducts = async () => {
  return await axiosInstance.get(
    "/products"
  );
};

export const createProduct = async (
  productData
) => {
  return await axiosInstance.post(
    "/products",
    productData
  );
};

export const deleteProduct = async (
  productId
) => {
  return await axiosInstance.delete(
    `/products/${productId}`
  );
};