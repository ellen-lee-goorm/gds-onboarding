import { ReactNode } from 'react';

export type DialogBodyProps = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  expanded: boolean;
  children: ReactNode;
};
