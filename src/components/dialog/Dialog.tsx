import React, { useState, useCallback } from 'react';
import style from './dialog.module.scss';

export enum DialogType {
  INFO = 'dialogInfo',
  ERROR = 'dialogError',
}

type DialogProps = Record<string, never>;

type DialogState = {
  dialogState: boolean;
  dialogContent: JSX.Element;
  dialogType: DialogType;
};

export let openDialog: (
  dialogContentData: JSX.Element,
  dialogType: DialogType
) => void = () => {};
export let closeDialog: () => void = () => {};

export const Dialog: React.FC<DialogProps> = () => {
  const [dialogState, setDialogState] = useState<DialogState>({
    dialogState: false,
    dialogContent: <p></p>,
    dialogType: DialogType.INFO,
  });

  const openDialogHandler = useCallback(
    (dialogContentData: JSX.Element, dialogType: DialogType) => {
      setDialogState({
        dialogState: true,
        dialogContent: dialogContentData,
        dialogType,
      });
    },
    []
  );

  const closeDialogHandler = useCallback(() => {
    setDialogState({
      dialogState: false,
      dialogContent: <p></p>,
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
      <div className={style.dialogContent}>{dialogState.dialogContent}</div>
      <form className={style.dialogButtonWrapper} method="dialog">
        <button className={style.dialogButton} onClick={closeDialogHandler}>
          Close
        </button>
      </form>
    </dialog>
  );
};
