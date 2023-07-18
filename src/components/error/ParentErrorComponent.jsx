import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorProneComponent from "./ErrorProneComponent";

// Parent component
const ParentErrorComponent = () => {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default ParentErrorComponent;
