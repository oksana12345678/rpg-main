import { useNavigate } from 'react-router-dom';
import CustomButton from 'components/Buttons/CustomButton';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      <p className="text-center text-xl">Сторінку не знайдено</p>
      <CustomButton onClick={() => navigate(-1)}>Назад</CustomButton>
    </div>
  );
};

export default NotFoundPage;
