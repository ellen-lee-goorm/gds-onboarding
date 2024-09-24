import { ReactNode } from 'react';

export type DialogDescriptionProps = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  children: ReactNode;
};
