import { DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
import { DialogTitleProps } from './Title.types';
import styles from './Title.module.scss';

const Title = ({ children }: DialogTitleProps) => {
  return <DialogTitle className={`${styles.title}`}>{children}</DialogTitle>;
};

export default Title;
