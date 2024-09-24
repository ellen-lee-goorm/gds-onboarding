import React, { useState } from 'react';
import { DialogContentsProps, PointerDownOutsideEvent } from './Contents.types';
import {
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
} from '@radix-ui/react-dialog';
import styles from './Contents.module.scss';
import '../../../index.css';
import { useDialogContext } from '../Dialog.context';

const Contents = ({
  maxHeight = '80vh',
  children,
  className,
  style,
}: DialogContentsProps) => {
  const { size, scrimClickable } = useDialogContext();

  const handleOpenOverlay = (event: PointerDownOutsideEvent) => {
    if (scrimClickable) return;

    event.preventDefault();
  };
  return (
    <DialogPortal>
      <DialogOverlay className={`${styles.overlay}`}>
        <DialogContent
          onPointerDownOutside={handleOpenOverlay}
          style={{ maxHeight: maxHeight, ...style }}
          className={`${styles.contents} ${styles[`contents-${size}`]} ${className}`}
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  );
};

export default Contents;
