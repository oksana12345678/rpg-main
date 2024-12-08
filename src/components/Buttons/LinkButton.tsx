import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const LinkButton = ({ children, className, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      {...props}
      className={twMerge(
        'border-button_accent hover:from-button_hover_l hover:to-button_hover_r mx-auto flex min-h-10 max-w-max items-center justify-center rounded-xl border-2 bg-gradient-to-r px-4 text-[16px] text-white hover:bg-gradient-to-l',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
