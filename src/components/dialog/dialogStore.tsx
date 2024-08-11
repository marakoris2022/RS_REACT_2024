import React from 'react';
import { DialogState, DialogType } from '../../interface/interface';

type DialogProps = {
  setDialogFunction: null | React.Dispatch<React.SetStateAction<DialogState>>;
};

const _dialog: DialogProps = {
  setDialogFunction: null,
};

export function openDialog(
  dialogContentData: JSX.Element,
  dialogType: DialogType
) {
  if (_dialog.setDialogFunction) {
    _dialog.setDialogFunction({
      dialogState: true,
      dialogContent: dialogContentData,
      dialogType,
    });
  }
}

export function closeDialog() {
  if (_dialog.setDialogFunction) {
    _dialog.setDialogFunction({
      dialogState: false,
      dialogContent: <p></p>,
      dialogType: DialogType.INFO,
    });
  }
}

export function bindSetDialog(
  fn: React.Dispatch<React.SetStateAction<DialogState>>
) {
  _dialog.setDialogFunction = fn;
}
