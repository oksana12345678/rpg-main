import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { bottomNavigation } from 'configs/navigation';

export const BottomNavBarV1 = () => {
  const location = useLocation();

  return (
    <div className="bg-bg_side_bar sticky bottom-0 flex w-full items-center justify-center rounded-t-xl px-2 pb-4 pt-3">
      {bottomNavigation.map(({ Icon, path, dropShadowClass }, index) => {
        const isActive = location.pathname === path;
        return (
          <Link
            to={path}
            key={index}
            className={clsx('p-3 transition-shadow duration-200', {
              [dropShadowClass]: isActive,
              'scale-125 rounded-3xl transition-transform': isActive,
            })}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
};

export const BottomNavBarV2 = () => {
  const location = useLocation();

  const activeIndex = bottomNavigation.findIndex(({ path }) => path === location.pathname);

  return (
    <div className="bg-bg_side_bar sticky bottom-0 z-50 flex w-full items-center justify-center rounded-t-xl px-5 pb-3">
      <div
        className="relative flex justify-center"
        style={{ width: `calc(70px * ${bottomNavigation.length})` }}
      >
        {bottomNavigation.map(({ Icon, path, label }, index) => {
          const isActive = location.pathname === path;
          return (
            <div key={index} className="relative z-10 h-[70px] w-[70px]">
              <Link to={path} className="relative flex w-full flex-col items-center justify-center">
                <div className="flex h-[75px] items-center">
                  <Icon
                    className={clsx('w-10 duration-500', {
                      'translate-y-[-35px]': isActive,
                    })}
                  />
                </div>
                <span
                  className={clsx(
                    'absolute translate-y-[20px] text-sm font-medium opacity-0 duration-500',
                    {
                      'translate-y-[10px] opacity-100': isActive,
                    },
                  )}
                >
                  {label}
                </span>
              </Link>
            </div>
          );
        })}

        <div
          className="border-accent_button1 absolute top-[-30px] h-[60px] w-[60px] rounded-full border-2 bg-white duration-500"
          style={{
            visibility: activeIndex === -1 ? 'hidden' : 'visible',
            left: `calc(70px * ${activeIndex} + 5px)`,
          }}
        >
          <div className="bg-main_bg_color absolute left-1/2 top-1/2 -z-10 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full [clip-path:inset(50%_0_0_0)]" />
          <div className="bg-main_bg_color absolute left-1/2 top-1/2 -z-10 h-[10px] w-[100px] -translate-x-1/2" />
          <div className="bg-bg_side_bar absolute left-[-23px] top-1/2 h-[20px] w-[20px] rounded-tr-full" />
          <div className="bg-bg_side_bar absolute right-[-23px] top-1/2 h-[20px] w-[20px] rounded-tl-full" />
        </div>
      </div>
    </div>
  );
};
