import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import AuthProvider from "./features/auth/AuthContext";
import ErrorBoundary from "./ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <ErrorBoundary>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ErrorBoundary>
</StrictMode>
);
