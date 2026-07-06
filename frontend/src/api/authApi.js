import axiosInstance from "../services/axiosInstance";

export const registerUser = async (userData) => {
  return await axiosInstance.post(
    "/auth/register",
    userData
  );
};

export const loginUser = async (loginData) => {
  return await axiosInstance.post(
    "/auth/login",
    loginData
  );
};