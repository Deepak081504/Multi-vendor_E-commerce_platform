import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";

import AdminDashboard from "../pages/admin/AdminDashboard";

import VendorDashboard from "../pages/vendor/VendorDashboard";
import AddProduct from "../pages/vendor/AddProduct";
import VendorOrders from "../pages/vendor/VendorOrders";

import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";

import MyProducts from "../pages/vendor/MyProducts";
import Categories from "../pages/Categories";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/dashboard"
        element={
          <ProtectedRoute>
            <VendorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/add-product"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/orders"
        element={
          <ProtectedRoute>
            <VendorOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
     />

      <Route
        path="/vendor/my-products"
        element={
          <ProtectedRoute>
             <MyProducts />
          </ProtectedRoute>
        }
     />

      <Route
        path="/categories"
        element={<Categories />}
     />
     
   </Routes>
  );
}

export default AppRoutes;