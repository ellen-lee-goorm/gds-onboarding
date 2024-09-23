import { ReactNode } from 'react';

export type DialogContentsProps = {
  maxHeight: string | number;
  children: ReactNode;
};

export type PointerDownOutsideEvent = CustomEvent & {
  detail: { originalEvent: PointerEvent };
};