import { ReactNode } from 'react';

export type DialogContentsProps = Pick<
  React.HTMLProps<HTMLDivElement>,
  'className' | 'style'
> & {
  maxHeight: string;
  children: ReactNode;
};

export type PointerDownOutsideEvent = CustomEvent & {
  detail: { originalEvent: PointerEvent };
};
