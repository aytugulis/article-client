import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { toast, ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-quill/dist/quill.snow.css";
import { AxiosError } from "axios";

const cacheTime = 1000 * 60 * 60 * 24 * 7;
const staleTime = 1000 * 60 * 15;

function onError(error: unknown) {
  if (error instanceof AxiosError) {
    if (error?.response?.status === 401)
      queryClient.setQueryData("userData", undefined);
    toast.error(error?.response?.data?.message);
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { cacheTime, onError, staleTime },
    mutations: { onError },
  },
});

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
  maxAge: cacheTime,
  hydrateOptions: {},
  dehydrateOptions: {
    shouldDehydrateQuery: ({ queryKey }) => queryKey === "userData",
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
