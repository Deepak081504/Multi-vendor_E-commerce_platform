import axiosInstance from "../services/axiosInstance";

export const getVendors = async () => {
  return await axiosInstance.get(
    "/vendors"
  );
};

export const getVendorDashboard =
  async (vendorId) => {
    return await axiosInstance.get(
      `/vendors/dashboard/${vendorId}`
    );
  };

export const approveVendor =
  async (vendorId) => {
    return await axiosInstance.put(
      `/admin/vendors/${vendorId}/approve`
    );
  };

export const rejectVendor =
  async (vendorId) => {
    return await axiosInstance.put(
      `/admin/vendors/${vendorId}/reject`
    );
  };