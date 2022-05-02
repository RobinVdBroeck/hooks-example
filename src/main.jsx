import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";

class ErrorFallback extends React.Component {
  render() {
    return (
      <div role="alert">
        <p>Something went wrong</p>
        <pre>{this.props.error.message}</pre>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
