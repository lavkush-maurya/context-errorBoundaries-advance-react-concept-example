// Error Boundary Page

import React, { Component } from "react";

// Error Boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Catch any error thrown by the child components
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log the error to an error tracking service
  componentDidCatch(error, errorInfo) {
    // You can log the error to a service like Sentry, Bugsnag, etc.
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI when an error occurs
      return <div>Oops! Something went wrong.</div>;
    }

    // Render the children components if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
