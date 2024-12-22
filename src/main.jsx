import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Products from "./pages/products.jsx";
import ProductDetails, { loader as productLoader } from "./pages/productDetails";
import ErrorPage from "./pages/errorPage.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminProducts from "./admin/products.jsx";
import AddProductPage from "./admin/addProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: productLoader,
      },
      {
        path: "/admin/products",
        element: <AdminProducts />,
      },
      {
        path: "/admin/products/addProduct",
        element: <AddProductPage />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
