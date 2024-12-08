export type IconProps = {
  size?: number;
  className?: string;
};

const StarIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => {
  const svgSize = `${size}px`;

  return (
    <svg
      className={className}
      height={svgSize}
      width={svgSize}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.72547 2.486L10.9721 4.97933C11.1421 5.32642 11.5955 5.65933 11.978 5.72308L14.2376 6.0985C15.6826 6.33933 16.0226 7.38767 14.9813 8.42183L13.2246 10.1785C12.9271 10.476 12.7642 11.0498 12.8563 11.4606L13.3592 13.6352C13.7559 15.3564 12.8421 16.0223 11.3192 15.1227L9.20131 13.8689C8.81881 13.6423 8.18839 13.6423 7.79881 13.8689L5.68089 15.1227C4.16506 16.0223 3.24422 15.3493 3.64089 13.6352L4.14381 11.4606C4.23589 11.0498 4.07297 10.476 3.77547 10.1785L2.01881 8.42183C0.984641 7.38767 1.31756 6.33933 2.76256 6.0985L5.02214 5.72308C5.39756 5.65933 5.85089 5.32642 6.02089 4.97933L7.26756 2.486C7.94756 1.13308 9.05256 1.13308 9.72547 2.486Z"
        stroke="#E1E51B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
