import { ReactNode } from 'react';

export type DialogSize = 'md' | 'lg' | 'xl';

export type DialogProps = {
  size: DialogSize;
  scrimClickable: boolean;
  children: ReactNode;
};

export type DialogContextType = {
  size: DialogSize;
  scrimClickable: boolean;
};

type ChildrenType = { children: ReactNode };
export type DialogProviderProps = DialogContextType & ChildrenType;
