import { DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
import { DialogTitleProps } from './Title.types';
import styles from './Title.module.scss';

const Title = ({ children, className, style }: DialogTitleProps) => {
  return (
    <DialogTitle className={`${styles.title} ${className}`} style={style}>
      {children}
    </DialogTitle>
  );
};

export default Title;
