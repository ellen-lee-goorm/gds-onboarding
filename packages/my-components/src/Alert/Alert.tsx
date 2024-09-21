import React from 'react';
import { AlertProps } from './Alert.types';
import styles from './Alert.module.scss';

export default function Alert({ status = 'primary', children }: AlertProps) {
  return (
    <div
      className={`${styles.container} ${styles[`alert-${status}`]}`}
      role="alert"
    >
      {children}
    </div>
  );
}
