import React from "react";
import { PropsWithChildren } from "react";

class ErrorBoundary extends React.Component<PropsWithChildren<{}>> {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { state, props } = this;
    if (state.error) {
      return <h2>{state.error.message}</h2>;
    } else {
      return props.children;
    }
  }
}

export default ErrorBoundary;
