import React from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { DialogTitleProps } from './Title.types';
import styles from './Title.module.scss';

export default function Title({
  children,
  className,
  style,
}: DialogTitleProps) {
  return (
    <DialogTitle className={`${styles.title} ${className}`} style={style}>
      {children}
    </DialogTitle>
  );
}
