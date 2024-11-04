import React from 'react';
import { DialogTriggerProps } from './Trigger.types';
import { DialogTrigger } from '@radix-ui/react-dialog';

export default function Trigger({ children }: DialogTriggerProps) {
  return <DialogTrigger asChild>{children}</DialogTrigger>;
}
