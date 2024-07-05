import { Component } from 'react';
import './dialog.css';

let openDialog: (text: string) => void = () => {};

type DialogProps = {};

type DialogState = {
  dialogState: boolean;
  dialogText: string;
};

export class Dialog extends Component<DialogProps, DialogState> {
  constructor(props: DialogProps) {
    super(props);

    this.state = {
      dialogState: false,
      dialogText: '',
    };

    openDialog = this.openDialog.bind(this);
  }

  openDialog(text: string) {
    this.setState({ dialogState: true, dialogText: text });
  }

  closeDialog() {
    this.setState({ dialogState: false, dialogText: '' });
  }

  render() {
    return (
      <dialog className="dialog__wrapper" open={this.state.dialogState}>
        <p className="dialog__text">{this.state.dialogText}</p>
        <form className="dialog__button-wrapper" method="dialog">
          <button className="dialog__button" onClick={() => this.closeDialog()}>
            Close
          </button>
        </form>
      </dialog>
    );
  }
}

export function useDialog() {
  return openDialog;
}
