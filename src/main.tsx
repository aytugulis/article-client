import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const queryFn = async ({ queryKey }: { queryKey: any }) => {
  try {
    const [endpoint, options] = queryKey;
    const { queryObject } = options;

    const searchParams = new URLSearchParams(queryObject);
    const url = `http://localhost:5000/${endpoint}?${searchParams.toString()}`;

    const res = await fetch(url);
    const jsonData = await res.json();

    if (!res.ok) throw new Error(jsonData.message || res.statusText);
    return jsonData;
  } catch (error: any) {
    throw new Error(
      error.name === "Error" ? error.message : "Unknown error occured"
    );
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn,
      onError: (error: any) => toast.error(error?.message),
      onSuccess: () => toast.success("success"),
    },
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
