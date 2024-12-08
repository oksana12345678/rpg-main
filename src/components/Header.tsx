import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from 'constants/routes';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {
  pageName: string;
  showSettingsIcon?: boolean;
  className?: string; // Optional className prop
};

const Header: React.FC<HeaderProps> = ({
  pageName,
  showSettingsIcon = false,
  className = '', // Provide a default empty string
}) => {
  return (
    <div
      className={twMerge(
        'relative mx-auto mb-auto mt-4 flex w-full max-w-lg items-center justify-center',
        className,
      )}
    >
      <h2 className="text-xl text-gray-200">{pageName}</h2>
      {showSettingsIcon && (
        <Link to={ROUTES.SETTINGS} className="btn btn-ghost absolute right-0 mr-6">
          <FontAwesomeIcon icon={faGears} size="1x" className="text-gray-200" />
        </Link>
      )}
    </div>
  );
};

export default Header;
