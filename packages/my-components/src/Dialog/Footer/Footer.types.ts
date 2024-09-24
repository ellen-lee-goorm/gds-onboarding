import { ReactNode } from 'react';

export type DialogFooterProps = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  children: ReactNode;
};
