import React from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { DialogDescriptionProps } from './Description.types';
import styles from './Description.module.scss';

export default function Description({
  children,
  className,
  style,
}: DialogDescriptionProps) {
  return (
    <DialogDescription
      className={`${styles.description} ${className}`}
      style={style}
    >
      {children}
    </DialogDescription>
  );
}
