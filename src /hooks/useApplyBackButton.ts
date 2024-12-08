import { useEffect } from 'react';
import { useNavigate, NavigateOptions, To } from 'react-router-dom';
import { useBackButton } from '@telegram-apps/sdk-react';

type useApplyBackButtonProps = {
  to?: To;
  options?: NavigateOptions;
};
const useApplyBackButton = ({ to, options }: useApplyBackButtonProps) => {
  const navigate = useNavigate();
  const backButton = useBackButton();

  useEffect(() => {
    const handleGoBack = () => {
      if (to) {
        navigate(to, options);
      } else {
        navigate(-1);
      }
    };
    if (backButton) {
      backButton.show();
      backButton.on('click', handleGoBack);
      return () => {
        backButton.hide();
        backButton.off('click', handleGoBack);
      };
    }
  }, [backButton, navigate, to, options]);
};

export default useApplyBackButton;
