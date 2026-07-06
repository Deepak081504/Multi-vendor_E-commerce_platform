import axiosInstance from "../services/axiosInstance";

export const getCategories = async () => {
  return await axiosInstance.get(
    "/categories"
  );
};