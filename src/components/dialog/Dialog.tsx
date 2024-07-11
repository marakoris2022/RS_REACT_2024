import React, { useState, useCallback } from 'react';
import style from './dialog.module.scss';

export enum DialogType {
  INFO = 'dialogInfo',
  ERROR = 'dialogError',
}

type DialogProps = Record<string, never>;

type DialogState = {
  dialogState: boolean;
  dialogText: string;
  dialogType: DialogType;
};

export let openDialog: (
  text: string,
  dialogType: DialogType
) => void = () => {};
export let closeDialog: () => void = () => {};

export const Dialog: React.FC<DialogProps> = () => {
  const [dialogState, setDialogState] = useState<DialogState>({
    dialogState: false,
    dialogText: '',
    dialogType: DialogType.INFO,
  });

  const openDialogHandler = useCallback(
    (text: string, dialogType: DialogType) => {
      setDialogState({ dialogState: true, dialogText: text, dialogType });
    },
    []
  );

  const closeDialogHandler = useCallback(() => {
    setDialogState({
      dialogState: false,
      dialogText: '',
      dialogType: DialogType.INFO,
    });
  }, []);

  openDialog = openDialogHandler;
  closeDialog = closeDialogHandler;

  return (
    <dialog
      className={`${style.dialogWrapper} ${style[dialogState.dialogType]}`}
      open={dialogState.dialogState}
    >
      <p className={style.dialogText}>{dialogState.dialogText}</p>
      <form className={style.dialogButtonWrapper} method="dialog">
        <button className={style.dialogButton} onClick={closeDialogHandler}>
          Close
        </button>
      </form>
    </dialog>
  );
};
