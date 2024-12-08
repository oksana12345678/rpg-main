import React from 'react';
import { generateName } from 'utils/generateName';
import clsx from 'clsx';
import Avatar from 'components/Avatar';
import { LeaderboardUser } from 'types/user';

type LeaderboardItemProps = {
  user: LeaderboardUser;
  position: number;
  isCurrent: boolean;
};

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ user, position, isCurrent }) => {
  const isFirst = position === 1;
  const isSecond = position === 2;
  const isThird = position === 3;
  const isBelowThird = position > 3;
  const isInTop = isFirst || isSecond || isThird;

  return (
    <div
      className={clsx(
        'relative mx-3 flex max-h-[60px] max-w-full items-center gap-3 rounded-2xl bg-white p-2 px-3 font-semibold text-slate-900',
        {
          'mb-1': isInTop,
          'sticky bottom-0 top-0 z-10 my-1 scale-[1.05]': isCurrent,
          'shadow-[inset_2px_2px_30px_8px_#DDB347]': isFirst,
          'shadow-[inset_2px_2px_32px_8px_#ABABAD]': isSecond,
          'shadow-[inset_2px_2px_32px_1px_#ac3b0e]': isThird,
          'shadow-[inset_1px_1px_12px_1px_#9350ff]': isBelowThird && !isCurrent,
          'shadow-[inset_1px_1px_26px_2px_#DB994C]': isCurrent,
        },
      )}
    >
      <div
        className={clsx('flex h-8 w-8 items-center justify-center rounded-full border-[1px]', {
          'border-[#DDB347] bg-[#DDB347]': isFirst,
          'border-[#545461] bg-[#ABABAD]': isSecond,
          'border-[#6d341e] bg-[#A15C41]': isThird,
          'border-[#BDADCF] bg-[#E7CFFF]': isBelowThird && !isCurrent,
          'border-[#C79050] bg-[#E7CFFF]': isCurrent,
        })}
      >
        <span className={clsx({ 'font-extrabold': isInTop })}>{position}</span>
      </div>

      <Avatar
        photoUrl={user.imageUrl}
        initials={generateName({ user, format: 'initials' })}
        className={clsx('h-11 w-11 rounded-full', {
          'border-4 border-[#DDB347]': isFirst,
          'border-4 border-[#ABABAD]': isSecond,
          'border-4 border-[#A15C41]': isThird,
          'z-10': isCurrent,
        })}
      />

      <span
        className={clsx('max-w-52 flex-1 overflow-hidden text-ellipsis', {
          'font-bold': isCurrent,
        })}
      >
        {generateName({ user })}
      </span>

      <span className="text-xl font-medium">
        {user.points.toString().length > 3
          ? user.points.toString().slice(0, -3) + ',' + user.points.toString().slice(-3)
          : user.points}
      </span>
    </div>
  );
};

export default LeaderboardItem;
