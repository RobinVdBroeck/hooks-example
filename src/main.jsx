import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
