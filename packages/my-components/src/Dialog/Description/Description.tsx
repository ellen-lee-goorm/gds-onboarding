import { DialogDescription } from '@radix-ui/react-dialog';
import React from 'react';
import { DialogDescriptionProps } from './Description.types';
import styles from './Description.module.scss';

const Description = ({
  children,
  className,
  style,
}: DialogDescriptionProps) => {
  return (
    <DialogDescription
      className={`${styles.description} ${className}`}
      style={style}
    >
      {children}
    </DialogDescription>
  );
};

export default Description;
