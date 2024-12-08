import { Description, Label } from '@headlessui/react';
import React from 'react';

export const CustomLabel = ({ children }: React.PropsWithChildren) => {
  return (
    <Label className="mb-1 block text-lg font-medium leading-6 text-gray-200">{children}</Label>
  );
};

export const CustomError = ({ children }: React.PropsWithChildren) => {
  return <Description className="mt-1 text-sm text-red-500">{children}</Description>;
};
