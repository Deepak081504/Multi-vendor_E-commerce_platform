import axiosInstance from "../services/axiosInstance";

export const getOrders = async () => {
  return await axiosInstance.get(
    "/orders"
  );
};