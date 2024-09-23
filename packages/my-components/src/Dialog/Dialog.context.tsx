import React, { createContext, useContext } from 'react';
import { DialogContextType, DialogProviderProps } from './Dialog.types';

const DialogContext = createContext<DialogContextType>({
  size: 'md',
  scrimClickable: true,
});

const DialogProvider = ({ children, ...values }: DialogProviderProps) => {
  return (
    <DialogContext.Provider value={values}>{children}</DialogContext.Provider>
  );
};

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within an DialogProvider');
  }
  return context;
};

export { DialogProvider, useDialogContext };
