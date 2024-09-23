import React from 'react';
import { DialogFooterProps } from './Footer.types';
import styles from './Footer.module.scss';
import '../../../index.css';

export default function Footer({ children }: DialogFooterProps) {
  return <div className={styles.footer}>{children}</div>;
}
