import { ReactNode } from 'react';

export type DialogHeaderProps = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  children: ReactNode;
};
