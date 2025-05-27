import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import AuthProvider from "./Context/AuthProvider";
import { Bounce, ToastContainer } from "react-toastify";
import Theme from "./Context/Theme";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Theme>
    <AuthProvider>
      <Toaster>
        
      </Toaster>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  </AuthProvider>
  </Theme>
);