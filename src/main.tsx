import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  QueryClient,
  QueryClientProvider,
  QueryFunctionContext,
  QueryKey,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { toast, ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-quill/dist/quill.snow.css";

/* interface QueryOption {
  queryObject: { [key: string]: string };
}

type Query = [string, QueryOption]; */

const queryFn = async ({ queryKey }: any) =>
  //QueryFunctionContext<QueryKey>
  {
    try {
      const [endpoint, options] = queryKey;
      const { queryObject } = options;

      const searchParams = new URLSearchParams(queryObject);
      const url = `http://localhost:5000/${endpoint}?${searchParams.toString()}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || response.statusText);
      return data;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(
          error.name === "Error" ? error.message : "Unknown error occured"
        );
    }
  };

const mutationFn = async ({ name, email, password }: any) => {
  try {
    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) throw new Error(data.message || response.statusText);
    return data;
  } catch (error) {
    if (error instanceof Error)
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
    mutations: {
      mutationFn,
      /*       onError: (error: any) => toast.error(error?.message),
      onSuccess: () => toast.success("successs"), */
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
