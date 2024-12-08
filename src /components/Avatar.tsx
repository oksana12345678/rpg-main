import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type AvatarProps = {
  initials: string;
  photoUrl?: string;
  shadowClass?: string;
  figure?:
    | 'circle'
    | 'square'
    | 'squircle'
    | 'heart'
    | 'decagon'
    | 'hexagon'
    | 'hexagon-2'
    | 'star'
    | 'star-2';
} & React.HTMLAttributes<HTMLDivElement>;

const Avatar: FC<AvatarProps> = ({
  initials,
  photoUrl,
  figure = 'circle',
  className,
  shadowClass,
  ...props
}) => {
  return (
    <div className={twMerge('_avatar _placeholder', shadowClass)}>
      <div
        className={twMerge(
          `_mask _mask-${figure}`,
          'w-16 bg-neutral text-2xl text-neutral-content',
          className,
        )}
        {...props}
      >
        {photoUrl ? <img src={photoUrl} /> : <span>{initials}</span>}
      </div>
    </div>
  );
};

export default Avatar;
