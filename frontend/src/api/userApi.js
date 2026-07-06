import axiosInstance from "../services/axiosInstance";

export const getUsers = async () => {
  return await axiosInstance.get(
    "/users"
  );
};

export const getUserById = async (
  userId
) => {
  return await axiosInstance.get(
    `/users/${userId}`
  );
};

export const updateUser = async (
  userId,
  userData
) => {
  return await axiosInstance.put(
    `/users/${userId}`,
    userData
  );
};

export const deleteUser = async (
  userId
) => {
  return await axiosInstance.delete(
    `/users/${userId}`
  );
};