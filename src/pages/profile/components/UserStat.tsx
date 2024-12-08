import { twMerge } from 'tailwind-merge';

export const UserStat: React.FC<{
  IconComponent: React.FC<React.HTMLAttributes<HTMLImageElement>>;
  label: string;
  value: number;
  className?: string; // Optional class name for customization
}> = ({ IconComponent, label, value, className = '' }) => {
  return (
    <div className={twMerge('-mx-1 mb-2 flex items-center justify-between text-sm', className)}>
      <div className="flex items-center text-white">
        <IconComponent className="mr-2 h-6 w-6" />
        <span>{label}</span>
      </div>
      <span className="text-accent_button1 bg-orang_accent max-w-16 flex-1 rounded-full px-2 text-center">
        {value}
      </span>
    </div>
  );
};
