import clsx from 'clsx';

export const ButtonsOverlay: React.FC<{ position: 'top-right' | 'bottom-right' }> = ({
  position,
}) => {
  const isTopLeft = position === 'top-right';
  const isBottomRight = position === 'bottom-right';
  return (
    <div
      className={clsx('absolute z-10 rotate-0 transform bg-[#06000C]', {
        'right-8 top-[-2px] ml-[-1px] mt-[-1px] h-[15%] w-[45%] rounded-br-xl': isTopLeft,
        'bottom-0 right-0 mb-[-1px] mr-[-1px] h-[70%] w-[52%] rounded-tl-xl': isBottomRight,
      })}
    >
      {/* Left angle*/}
      <div
        className={clsx('absolute bottom-[5px] left-[-2px] h-4 w-4 bg-[#2A006D]', {
          'ml-[1px] translate-y-full rounded-tr-xl': isTopLeft,
          'mb-[1px] -translate-x-full rounded-br-xl drop-shadow-[5px_5px_#141415]': isBottomRight,
        })}
      />

      {/* Right angle*/}
      {/* <div
        className={clsx('absolute right-0 top-0 h-4 w-4 bg-orang_accent', {
          'mt-[1px] translate-x-full rounded-tl-xl drop-shadow-[-5px_-5px_#141415]': isTopLeft,
          'mr-[1px] -translate-y-full rounded-br-xl drop-shadow-[5px_5px_#141415]': isBottomRight,
        })}
      /> */}
    </div>
  );
};
