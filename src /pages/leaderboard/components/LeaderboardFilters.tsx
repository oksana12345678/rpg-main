import React, { useState } from 'react';
import clsx from 'clsx';
import { useAppDispatch } from 'store/hooks';
import leaderboardAction from 'store/leaderboard/leaderboardSlice';
import { TimeFilterType } from 'types/leaderboard';

type FilterItem = {
  label: string;
  timeType: TimeFilterType;
  timeCount: number;
};

const listOfFilters: FilterItem[] = [
  {
    label: 'Тиждень',
    timeType: 'week',
    timeCount: 1,
  },
  {
    label: 'Місяць',
    timeType: 'month',
    timeCount: 1,
  },
  {
    label: 'Весь час',
    timeType: 'allTime',
    timeCount: 1,
  },
];

const LeaderboardFilters: React.FC = () => {
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);
  const dispatch = useAppDispatch();

  const handleChangeFilter = (timeType: TimeFilterType, timeCount: number) => {
    dispatch(leaderboardAction.updateFilters({ timeType, timeCount }));
  };

  return (
    <div className="flex justify-between gap-4 px-3 py-2">
      {listOfFilters.map(({ label, timeType, timeCount }, index) => (
        <button
          className={clsx(
            'border-button_accent h-full flex-1 border-collapse rounded-xl border-2 p-2 text-white',
            'transition-all duration-300',
            {
              'scale-110 border-4 shadow-[1px_1px_10px_2px_#7C00F8]': currentFilterIndex === index,
            },
          )}
          onClick={() => {
            setCurrentFilterIndex(index);
            handleChangeFilter(timeType, timeCount);
          }}
          key={label}
        >
          <span className="text-nowrap font-semibold">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default LeaderboardFilters;
