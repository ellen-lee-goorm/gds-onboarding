import React from 'react';
import { DialogBodyProps } from './Body.types';
import styles from './Body.module.scss';
import '../../../index.css';

export default function Body({
  expanded = false,
  children,
  className,
  style,
}: DialogBodyProps) {
  return (
    <div
      className={`${styles.body} ${expanded && styles.expanded} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
