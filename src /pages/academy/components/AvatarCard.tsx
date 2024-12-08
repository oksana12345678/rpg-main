import Avatar from 'components/Avatar';
import { Avatar as AvatarModel } from 'types/avatar';
import { getYearString } from 'utils/getYearString';
import { generateName } from 'utils/generateName';
import { jobTitleColorClasses } from 'constants/academy';
import clsx from 'clsx';

type AvatarProps = {
  avatar: AvatarModel;
};

const AvatarCard = ({ avatar }: AvatarProps) => {
  const initials = generateName({ user: avatar, format: 'initials' });
  const { firstName, jobTitle, experience } = avatar;

  return (
    <div className="flex w-[33%] flex-col items-center gap-1.5 p-1">
      <Avatar
        key={avatar.id}
        initials={initials}
        photoUrl={avatar.imageUrl}
        figure="square"
        className="w-[70px] rounded-[20px]"
        shadowClass={clsx(
          'shadow-avatar-custom w-[70px] rounded-[20px] ',
          jobTitleColorClasses[avatar.jobTitle],
        )}
      />
      <div className="flex flex-col items-center">
        <p className="text-sm font-semibold">{firstName}</p>
        <p className="text-sm">{jobTitle}</p>
        <p className="text-xs">{`Досвід ${getYearString(experience)}`}</p>
      </div>
    </div>
  );
};

export default AvatarCard;
