import React from 'react';
import { DialogHeaderProps } from './Header.types';
import styles from './Header.module.scss';
import '../../../index.css';

export default function Header({ children }: DialogHeaderProps) {
  return <div className={`${styles.header}`}>{children}</div>;
}
