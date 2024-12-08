type GenerateNameProps = {
  user: {
    firstName: string;
    lastName?: string;
  };
  order?: 'lastFirst' | 'firstLast';
  format?: 'full' | 'initials' | 'short';
};

export const generateName = ({
  user,
  format = 'full',
  order = 'firstLast',
}: GenerateNameProps): string => {
  const { firstName, lastName = '' } = user;
  const firstInitial = firstName ? firstName[0].toUpperCase() : '';
  const lastInitial = lastName ? lastName[0].toUpperCase() : '';

  switch (format) {
    case 'initials':
      return order === 'firstLast'
        ? `${firstInitial}${lastInitial}`
        : `${lastInitial}${firstInitial}`;

    case 'short':
      return order === 'firstLast'
        ? `${firstName}${lastInitial ? ` ${lastInitial}.` : ''}`
        : `${lastName ? `${lastName} ` : ''}${lastName ? `${firstInitial}.` : lastInitial}.`;

    case 'full':
    default:
      return order === 'firstLast'
        ? `${firstName}${lastName ? ` ${lastName}` : ''}`
        : `${lastName ? `${lastName} ` : ''}${firstName}`;
  }
};
