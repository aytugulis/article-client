import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { toast, ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-quill/dist/quill.snow.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error: any) => toast.error(error?.message),
      /*       onSuccess: () => toast.success("success"), */
    },
    /*     mutations: {
      onError: (error: any) => toast.error(error?.message),
      onSuccess: () => toast.success("successs"),
    }, */
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
);
