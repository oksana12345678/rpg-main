import React from 'react';
import { QuestsTask } from 'types/quest';

type LinkProps = {
  questTask: QuestsTask;
  front: boolean;
};

const LinkList: React.FC<LinkProps> = ({ questTask, front }) => {
  const getRandomLink = (links: string[]) => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    return selectedLink;
  };

  const renderLink = (url: string, label: string) => (
    <li>
      <a
        className="rounded-lg border-2 border-button_accent px-10 py-2"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </li>
  );

  return (
    <ul className="flex justify-between gap-11">
      {questTask?.links?.map((link, index) => (
        <React.Fragment key={index}>
          {(front ? link.front : link.ux_ui)?.map((linkItem, itemIndex) => (
            <React.Fragment key={itemIndex}>
              {linkItem.figma &&
                renderLink(
                  Array.isArray(linkItem.figma) ? getRandomLink(linkItem.figma) : linkItem.figma,
                  front ? 'Макет' : 'Приклади',
                )}
              {linkItem.technics_task &&
                renderLink(linkItem.technics_task, front ? 'Док. ТЗ' : 'Завдання')}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default LinkList;
