import React from 'react';
import { DialogHeaderProps } from './Header.types';
import styles from './Header.module.scss';
import '../../../index.css';

export default function Header({
  children,
  className,
  style,
}: DialogHeaderProps) {
  return (
    <div className={`${styles.header} ${className}`} style={style}>
      {children}
    </div>
  );
}
