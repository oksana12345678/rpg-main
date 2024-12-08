import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, ButtonProps } from '@headlessui/react';

type Props = {
  loading?: boolean;
  loadingComponent?: ReactElement;
} & ButtonProps;

const CustomButton = React.forwardRef<HTMLButtonElement, Props>(function (props, ref) {
  const { children, className, loading, loadingComponent, ...rest } = props;
  const LoadingComponent = loadingComponent ? loadingComponent : <span className="_loading" />;
  return (
    <Button
      {...rest}
      className={twMerge(
        'mx-auto flex min-h-10 max-w-prose items-center justify-center rounded-xl border-2 border-button_accent bg-button_accent px-5 text-[16px] text-white',
        className as string,
      )}
      ref={ref}
    >
      {loading ? LoadingComponent : children}
    </Button>
  );
});

export default CustomButton;
