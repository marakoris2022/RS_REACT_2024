import { Component } from 'react';
import './dialog.css';

export let openDialog: (
  text: string,
  dialogType: DialogType
) => void = () => {};

export let closeDialog: () => void = () => {};

type DialogProps = Record<string, never>;

export enum DialogType {
  INFO = 'info',
  ERROR = 'error',
}

type DialogState = {
  dialogState: boolean;
  dialogText: string;
  dialogType: DialogType;
};

export class Dialog extends Component<DialogProps, DialogState> {
  constructor(props: DialogProps) {
    super(props);

    this.state = {
      dialogState: false,
      dialogText: '',
      dialogType: DialogType.INFO,
    };

    openDialog = this.openDialog.bind(this);
    closeDialog = this.closeDialog.bind(this);
  }

  openDialog(text: string, dialogType: DialogType) {
    this.setState({ dialogState: true, dialogText: text, dialogType });
  }

  closeDialog() {
    this.setState({ dialogState: false, dialogText: '' });
  }

  render() {
    return (
      <dialog
        className={`dialog__wrapper dialog__${this.state.dialogType}`}
        open={this.state.dialogState}
      >
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

// export function useDialog() {
//   return openDialog;
// }
