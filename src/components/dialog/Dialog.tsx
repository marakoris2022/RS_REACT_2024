import React, { useState, useEffect } from 'react';
import style from './dialog.module.scss';
import { DialogState, DialogType } from '../../interface/interface';
import { bindSetDialog } from './dialogStore';

type DialogProps = Record<string, never>;

export const Dialog: React.FC<DialogProps> = () => {
  const [dialogState, setDialogState] = useState<DialogState>({
    dialogState: false,
    dialogContent: <p></p>,
    dialogType: DialogType.INFO,
  });

  function handleClick() {
    setDialogState({
      dialogState: false,
      dialogContent: <p></p>,
      dialogType: DialogType.INFO,
    });
  }

  useEffect(() => {
    bindSetDialog(setDialogState);
  }, []);

  return (
    <dialog
      className={`${style.dialogWrapper} ${style[dialogState.dialogType]}`}
      open={dialogState.dialogState}
    >
      <div className={style.dialogContent}>{dialogState.dialogContent}</div>
      <form className={style.dialogButtonWrapper} method="dialog">
        <button className={style.dialogButton} onClick={handleClick}>
          Close
        </button>
      </form>
    </dialog>
  );
};
