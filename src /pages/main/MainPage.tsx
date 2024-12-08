import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { mainNavigation } from 'configs/navigation';

const MainPage = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-5">
      {mainNavigation.map(({ path, label, Icon, dropShadowClass }) => {
        return (
          <div className="flex flex-col items-center justify-center gap-2 p-4" key={label}>
            <Link to={path} className="space-y-4">
              <Icon className={clsx('w-[100px]', dropShadowClass)} />
              <p className="text-center">{label}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MainPage;
