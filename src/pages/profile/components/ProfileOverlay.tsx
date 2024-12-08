import clsx from 'clsx';

export const ProfileOverlay: React.FC<{ position: 'top-left' | 'bottom-right' }> = ({
  position,
}) => {
  const isTopLeft = position === 'top-left';
  const isBottomRight = position === 'bottom-right';
  return (
    <div
      className={clsx('bg-main_bg_color absolute z-10 rotate-0 transform', {
        'left-0 top-0 ml-[-1px] mt-[-1px] h-[15%] w-[45%] rounded-br-xl': isTopLeft,
        'bottom-0 right-0 mb-[-1px] mr-[-1px] h-[70%] w-[52%] rounded-tl-xl': isBottomRight,
      })}
    >
      {/* Left angle*/}
      <div
        className={clsx('bg-orang_accent absolute bottom-0 left-0 h-4 w-4', {
          'ml-[1px] translate-y-full rounded-tl-xl drop-shadow-[-5px_-5px_#141415]': isTopLeft,
          'mb-[1px] -translate-x-full rounded-br-xl drop-shadow-[5px_5px_#141415]': isBottomRight,
        })}
      />

      {/* Right angle*/}
      <div
        className={clsx('bg-orang_accent absolute right-0 top-0 h-4 w-4', {
          'mt-[1px] translate-x-full rounded-tl-xl drop-shadow-[-5px_-5px_#141415]': isTopLeft,
          'mr-[1px] -translate-y-full rounded-br-xl drop-shadow-[5px_5px_#141415]': isBottomRight,
        })}
      />
    </div>
  );
};
