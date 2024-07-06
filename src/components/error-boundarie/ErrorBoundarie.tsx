import { Component } from 'react';
import { closeDialog, DialogType, openDialog } from '../dialog/Dialog';
import './errorBoundarie.css';
import { getSearchValue } from '../../store/state';

type ErrorBoundaryProps = { children: JSX.Element };

type ErrorBoundaryState = { hasError: boolean };

export let setErrorBoundaryState: (hasError: boolean) => void = () => {};

function handleClick() {
  setErrorBoundaryState(false);
  closeDialog();
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };

    setErrorBoundaryState = this.toggleBoundaryState.bind(this);
  }

  toggleBoundaryState(hasError: boolean) {
    this.setState({ hasError });
  }

  render() {
    if (this.state.hasError) {
      openDialog(
        `Can't find this Pokemon: "${getSearchValue()}"`,
        DialogType.ERROR
      );

      return (
        <div className="boundarie__wrapper">
          <div className="boundarie__container">
            <h1 className="boundarie__title">
              Error Boundaries Implementation
            </h1>
            <button className="boundarie__button" onClick={() => handleClick()}>
              Return back
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
