import React from 'react';
import { useAppSelector } from 'store/hooks';
import { useGetLeadeboardData } from 'store/leaderboard/hooks';
import Spinner from 'components/Spinner';
import LeaderboardItem from './components/LeaderboardItem';
import LeaderboardFilters from './components/LeaderboardFilters';

const LeaderboardPage: React.FC = () => {
  const user = useAppSelector((store) => store.user.user);
  const { users, currentUser, isLoading, isError } = useGetLeadeboardData();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error loading leaderboard</div>;

  return (
    <div className="bg-main_bg_color relative flex max-h-full w-full flex-col gap-2 px-3 pt-5">
      <LeaderboardFilters />
      <div className="relative flex flex-col gap-1 overflow-y-auto">
        {users.map((leaderboardUser, index) => {
          return (
            <LeaderboardItem
              key={leaderboardUser.id}
              user={leaderboardUser}
              position={++index}
              isCurrent={user?.id === leaderboardUser.id}
            />
          );
        })}

        {currentUser && currentUser.position > users.length && (
          <div className="bg-main_bg_color sticky bottom-0 pb-3">
            <LeaderboardItem user={currentUser} position={currentUser.position} isCurrent={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
