import { ReactNode } from 'react';

export type DialogTitleProps = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  children: ReactNode;
};
