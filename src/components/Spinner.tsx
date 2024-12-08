// components/Spinner.tsx
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="my-auto flex h-full w-full items-center justify-center">
      <span className="_loading _loading-spinner _loading-lg"></span>
    </div>
  );
};

export default Spinner;
