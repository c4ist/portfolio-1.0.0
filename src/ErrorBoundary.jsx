import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 p-8 font-mono">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Something went wrong</h1>
          <div className="bg-white p-4 rounded border border-red-200 overflow-auto">
            <p className="text-red-600 font-bold mb-2">{this.state.error && this.state.error.toString()}</p>
            <pre className="text-xs text-neutral-500">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
