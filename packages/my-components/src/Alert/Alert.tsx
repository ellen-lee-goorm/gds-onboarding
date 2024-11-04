import React from 'react';
import { AlertProps } from './Alert.types';
import styles from './Alert.module.scss';

export default function Alert({ color = 'primary', children }: AlertProps) {
  return (
    <div
      className={`${styles.container} ${styles[`alert-${color}`]}`}
      role="alert"
    >
      {children}
    </div>
  );
}
