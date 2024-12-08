import clsx from 'clsx';
import BaseShadowContainer from 'components/BaseShadowContainer/BaseShadowContainer';
import React from 'react';

interface ChooseClanCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ChooseClanCard: React.FC<ChooseClanCardProps> = ({ icon, title, content }) => {
  const classMapping = {
    'Воїн фронтенду': { container: 'shadow-shadow_front_end', title: 'text-front_end' },
    default: { container: 'shadow-shadow_ux_ui_design', title: 'text-ux_ui_design' },
  } as const;

  const { container, title: titleClass } =
    classMapping[title as keyof typeof classMapping] || classMapping.default;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <h3 className={`${titleClass} text-xl font-semibold`}>{title}</h3>
        <span className="flex">{icon}</span>
      </div>

      <BaseShadowContainer
        className={clsx(
          'mb-0 flex w-[326px] items-center justify-center rounded-lg px-5 py-4 shadow-inner-custom',
          container,
        )}
        contentStyle="h-44 w-[288px] overflow-scroll text-sm font-semibold leading-5 tracking-[-0.02em]"
        content={content}
      />
    </div>
  );
};

export default ChooseClanCard;
