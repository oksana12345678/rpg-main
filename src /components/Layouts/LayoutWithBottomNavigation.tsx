import { BottomNavBarV2 as BottomNavBar } from 'components/BottomNavBar';
import { Outlet } from 'react-router-dom';

const LayoutWithBottomNavigation = () => {
  return (
    <div className="relative flex w-full flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default LayoutWithBottomNavigation;
