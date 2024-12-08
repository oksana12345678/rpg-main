import { UserStat } from './UserStat';
import { ROLES } from 'constants/roles';
import { ProfileImages } from 'components/Images';

import { User } from 'types/user';
import { ProfileOverlay } from './ProfileOverlay';
import Avatar from 'components/Avatar';
import { generateName } from 'utils/generateName';

type UserInfoProps = {
  user: User;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const shortName = generateName({ user, format: 'short' });
  const initials = generateName({ user, format: 'initials' });
  const userRole = ROLES.find((role) => role.value === user.role)?.label || '';

  return (
    <div className="mx-auto flex w-full max-w-[450px] flex-grow flex-col items-center p-1">
      <div className="bg-orang_accent relative mb-1 mt-1 w-full rounded-xl">
        <ProfileOverlay position={'top-left'} />
        <ProfileOverlay position={'bottom-right'} />

        <div className="relative flex h-full items-center justify-between p-1">
          <div className="z-20 mr-4 mt-4 flex w-[50%] items-center justify-center space-x-4">
            <div className="relative flex flex-col items-center">
              <Avatar
                photoUrl={user.imageUrl}
                initials={initials}
                className="mt-2 w-24 rounded-full object-cover"
              />
              <h2 className="text-accent_button1 mt-2 font-semibold">{shortName}</h2>
            </div>
          </div>

          <div className="z-20 mt-2 flex w-[50%] flex-col space-y-1">
            <div className="mb-4 flex items-center justify-center font-semibold">
              <span className="text-gray-600">Роль:</span>
              <p className="text-accent_button1 ml-2">{userRole}</p>
            </div>

            <div className="h-full w-full">
              <UserStat IconComponent={ProfileImages.Level} label="Рівень" value={user.level} />
              <UserStat IconComponent={ProfileImages.Points} label="Бали" value={user.points} />
              <UserStat IconComponent={ProfileImages.Coints} label="Монети" value={user.coins} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
