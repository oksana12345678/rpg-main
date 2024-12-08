import { useNavigate } from 'react-router-dom';
import CustomButton from 'components/Buttons/CustomButton';

const InDevelopingPage = ({ pageName }: { pageName?: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-60 space-y-5">
        <p className="text-center text-xl">
          Сторінка <span className="font-semibold text-[#50167C]">{pageName || ''}</span>{' '}
          знаходиться на стадії розробки
        </p>
        <CustomButton onClick={() => navigate(-1)}>Назад</CustomButton>
      </div>
    </div>
  );
};

export default InDevelopingPage;
