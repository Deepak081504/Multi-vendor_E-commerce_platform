# 🛒 Multi-Vendor E-Commerce Platform

An advanced full-stack e-commerce solution that enables multiple vendors to list and sell products, while providing an intuitive shopping experience for customers and a comprehensive management panel for administrators.

---

## 📂 Project Structure & Overview

This repository ("deepak081504/multi-vendor_e-commerce_platform") contains both the backend and frontend code bases[cite: 1]:

### 🖥️ Backend Architecture (`/Backend`)

Built with Python, using a modular and scalable structure[cite: 1]:
*   **`app/main.py`** - Application entry point[cite: 1].
*   **`core/`** - Global configurations, security, database sessions, and dependencies[cite: 1].
*   **`models/`** - Database models for `user`, `vendor`, `product`, `category`, `cart`, `order`, and `payment`[cite: 1].
*   **`routers/`** - Layered API routes handling specific domain logical flows[cite: 1].
*   **`schemas/`** - Data validation, serialization, and deserialization controls[cite: 1].
*   **`services/`** - Decoupled business logic handling database mutations[cite: 1].
*   **`utils/`** - Helper files for tokens, password hashing, and core constants[cite: 1].

### 🎨 Frontend Architecture (`/frontend`)
Built with React and bundled using Vite for fast rendering and state tracking[cite: 1]:
*   **`src/context/`** - AuthContext managing global authorization and session configurations[cite: 1].
*   **`src/components/`** - Reusable visual building blocks like Navbar, Footer, and Cards[cite: 1].
*   **`src/pages/`** - Complete view screens divided by permissions[cite: 1]:
    *   *Customer pages*: Home, Categories, Products, Details, Cart, and Orders[cite: 1].
    *   *Vendor views*: AddProduct, EditProduct, MyProducts, VendorDashboard, and VendorOrders[cite: 1].
    *   *Admin panel*: Management screens for Categories, Products, Users, and Vendors[cite: 1].
*   **`src/api/` & `src/services/`** - Structured modular API layer utilizing an Axios instance[cite: 1].

---

## ⚙️ Technical Highlights
*   **Role-Based Dashboards**: Fine-grained dashboards for Admin, Vendor, and Customer personas[cite: 1].
*   **Robust Session Security**: Password hashing routines paired with token-based endpoint access control[cite: 1].
*   **Clean Separation of Concerns**: Highly decoupled routing, validation, and business logic layers[cite: 1].
*   **Optimized Client Bundling**: Responsive React interface driven by modern Vite utilities[cite: 1].

---
