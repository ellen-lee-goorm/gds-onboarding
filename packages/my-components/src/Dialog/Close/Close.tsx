import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogCloseType } from './Close.types';
import styles from './Close.module.scss';
import '../../../index.css';

export default function Close({ children, className, style }: DialogCloseType) {
  return (
    <Dialog.Close
      asChild
      className={`${styles.close} ${className}`}
      style={style}
    >
      <button>{children}</button>
    </Dialog.Close>
  );
}
