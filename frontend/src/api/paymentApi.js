import axiosInstance from "../services/axiosInstance";

export const getPayments = async () => {
  return await axiosInstance.get(
    "/payments"
  );
};