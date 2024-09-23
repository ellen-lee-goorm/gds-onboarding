import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseType } from './Close.types';
import styles from './Close.module.scss';
import '../../../index.css';

const Close = ({ children }: CloseType) => {
  return (
    <Dialog.Close asChild className={styles.close}>
      <button>{children}</button>
    </Dialog.Close>
  );
};

export default Close;
