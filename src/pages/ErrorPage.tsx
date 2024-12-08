import { useRouteError } from 'react-router-dom';
import CustomButton from 'components/Buttons/CustomButton';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div className="max-w-[600px] space-y-5">
      <p className="text-center text-xl">Щось пішло не так :(</p>
      <p className="text-center text-xl">{error?.message}</p>
      <CustomButton onClick={() => window.location.reload()}>Перезавантажити</CustomButton>
    </div>
  );
};

export default ErrorPage;
