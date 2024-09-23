import React, { useState } from 'react';
import { DialogProps } from './Dialog.types';
import { DialogProvider } from './Dialog.context';
import { Root as DialogRoot } from '@radix-ui/react-dialog';
import Contents from './Contents';
import Trigger from './Trigger';
import Header from './Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Close from './Close';
import Title from './Title';
import Description from './Description/Description';

export default function Dialog({
  size = 'md',
  scrimClickable = true,
  children,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenDialog = (open: boolean) => {
    setIsOpen(open);
  };
  return (
    <DialogProvider size={size} scrimClickable={scrimClickable}>
      <DialogRoot open={isOpen} onOpenChange={handleOpenDialog}>
        {children}
      </DialogRoot>
    </DialogProvider>
  );
}

Dialog.Contents = Contents;
Dialog.Trigger = Trigger;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Close = Close;
Dialog.Title = Title;
Dialog.Description = Description;
