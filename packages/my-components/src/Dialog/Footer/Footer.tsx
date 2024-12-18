import React from 'react';
import { DialogFooterProps } from './Footer.types';
import styles from './Footer.module.scss';
import '../../../index.css';

export default function Footer({
  children,
  className,
  style,
}: DialogFooterProps) {
  return (
    <div className={`${styles.footer} ${className}`} style={style}>
      {children}
    </div>
  );
}
