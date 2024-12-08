import clsx from 'clsx';
import Icon from 'components/Icon';
import { iconsMap } from 'constants/completeMapIcons';
import React from 'react';

interface Regard {
  desc: string;
  value?: number | string;
}

interface QuestCompletedProps {
  title?: string;
  content: string[];
  regards: Regard[];
  coins?: number;
  customClasses?: {
    container?: string;
    title?: string;
    content?: string;
    regardsList?: string;
    regardItem?: string;
  };
}

const classMapping = {
  'Воїн фронтенду': { container: 'shadow-shadow_front_end', title: 'text-front_end' },
  'Винахідник UX/UI': { container: 'shadow-shadow_ux_ui_design', title: 'text-ux_ui_design' },
  default: { container: 'shadow-default', title: 'text-default' },
} as const;

const QuestCompleteCard: React.FC<QuestCompletedProps> = ({
  title,
  content,
  regards,
  customClasses = {},
}) => {
  const { container, title: titleClass } =
    classMapping[title as keyof typeof classMapping] || classMapping.default;
  const selectedIcon = title ? iconsMap[title] : '';
  const isBaseQuest = title === 'Воїн фронтенду' || title === 'Винахідник UX/UI';

  return (
    <div className={clsx('flex w-full flex-col items-center', container, customClasses.container)}>
      <div className="flex flex-col items-center gap-2">
        <h3 className={clsx('text-xl font-semibold', titleClass, customClasses.title)}>{title}</h3>
        <span className="flex h-[160px] w-[160px]">
          <Icon src={selectedIcon} alt={title || 'Default icon'} />
        </span>
      </div>

      <div
        className={clsx(
          'mb-0 flex w-full flex-col items-center justify-center gap-3 rounded-lg py-4 text-center',
          customClasses.content,
        )}
      >
        {content.map((item, idx) => (
          <p
            key={idx}
            className="max-w-[326px] overflow-scroll text-sm font-semibold leading-5 tracking-[-0.02em]"
          >
            {idx === 1 && isBaseQuest ? (
              <>
                {item} {title}
              </>
            ) : (
              item
            )}
          </p>
        ))}
      </div>

      <ul
        className={clsx(
          'flex w-full items-center justify-between gap-10 px-4 pt-6 md:w-3/4 lg:w-2/3',
          customClasses.regardsList,
        )}
      >
        {regards.map((regard, index) => {
          const normalizedDesc = regard.desc.replace(':', '').trim().toLowerCase();
          const iconSrc = iconsMap[normalizedDesc] || '';
          return (
            <li
              key={index}
              className={clsx(
                'flex min-w-[64px] flex-col items-center gap-3 text-sm font-semibold',
                customClasses.regardItem,
              )}
            >
              <Icon src={iconSrc} alt={regard.desc || 'Default icon'} />
              <p className="flex gap-2">
                {regard.value}
                <span>{regard.desc}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestCompleteCard;
