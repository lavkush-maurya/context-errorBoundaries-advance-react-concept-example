import React from "react";

// Component that may throw an error
const ErrorProneComponent = () => {
  // Throw an error intentionally
  throw new Error("Oops! An error occurred.");

  // The following code will not execute due to the error above
  return <div>This code will not be rendered.</div>;
};

export default ErrorProneComponent;
