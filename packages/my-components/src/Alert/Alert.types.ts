import { ReactNode } from 'react';

export type AlertColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'hint';

export interface AlertProps {
  color: AlertColor;
  children: ReactNode;
}
