import React from 'react';
import padlock from 'assets/images/profile/padlock.png';
import broom from 'assets/images/profile/broom.png';

interface IconData {
  src: string;
  isLocked: boolean;
}

interface ProfileInfoBlockProps {
  title: string;
  icons: IconData[]; // Array of icon data with lock status
  dynamicText: string;
}

export const ProfileInfoBlock: React.FC<ProfileInfoBlockProps> = ({
  title,
  icons,
  dynamicText,
}) => {
  return (
    <div className="ml-2 mt-2 flex min-h-20 w-full flex-col gap-6 p-1 text-white">
      {/* Title - Top Left */}
      <div className="text-l">{title}</div>

      {/* Main Content - Center, with Rounded Purple Borders */}
      <div className="mx-auto flex items-center gap-6">
        {icons.slice(0, 4).map((icon, index) => (
          <div
            key={index}
            className="border-button_accent relative rounded-lg border-[0.05rem] p-[0.2rem]"
          >
            <img className="h-16 w-16" src={icon.src} alt={`icon-${index}`} />
            {icon.isLocked && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-80">
                <img src={padlock} alt="locked" className="h-full w-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-end">
        <button
          className="relative flex h-6 w-24 items-center justify-center overflow-hidden rounded-full text-white"
          // Assuming you have a click handler function
        >
          {/* Broom Image - Positioned Diagonally */}
          <img
            src={broom}
            alt="broom"
            className="absolute inset-0 h-full w-full transform object-cover"
          />

          {/* Dynamic Text - Top Left Corner */}
          <span className="absolute bottom-2 top-0 z-10 mr-4 text-[0.6rem] font-light tracking-wider">
            {dynamicText}
          </span>
        </button>
      </div>
    </div>
  );
};
