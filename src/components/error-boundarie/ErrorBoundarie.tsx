import React, { ReactNode } from 'react';
import './errorBoundarie.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleClick = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="boundarie__wrapper">
          <div className="boundarie__container">
            <h1 className="boundarie__title">
              Error Boundaries Implementation
            </h1>
            <button className="boundarie__button" onClick={this.handleClick}>
              Return back
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
