import { Link } from 'react-router-dom';
import { academyOptions } from 'constants/academy';
import AvatarCard from './components/AvatarCard';
import { useGetPreviewAvatars } from 'store/academy/hooks';
import CustomButton from 'components/Buttons/CustomButton';
import clsx from 'clsx';

const AcademyPage = () => {
  const { avatars, isLoading, isFetching } = useGetPreviewAvatars();

  return (
    <div className="flex h-full w-full flex-col gap-5 p-6">
      <div className="flex flex-1 flex-col gap-6">
        <p className="font-bold">Аватари</p>

        {isLoading || isFetching ? (
          <div className="flex flex-1 items-center justify-center">
            <span className="_loading _loading-spinner w-10" />
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-between gap-y-3">
              {avatars.map((avatar) => (
                <AvatarCard avatar={avatar} key={avatar.id} />
              ))}
            </div>

            <div className="flex justify-end">
              <Link to="avatars">Всі аватари</Link>
            </div>
          </>
        )}
      </div>

      <div className="space-y-4 pb-10">
        <p className="font-bold">Опції</p>
        <div className="flex justify-between">
          {academyOptions.map(({ Icon, label, shadowType, shadowTypeHover }, index) => (
            <CustomButton
              onClick={() => alert('Sorry, this page is under construction')}
              className={clsx(
                'ease h-[112] w-[112px] flex-col gap-2 border-none bg-transparent p-3 drop-shadow-2xl transition-all duration-500',
                shadowType,
              )}
              key={index}
              onMouseEnter={(e) => {
                e.currentTarget.classList.add(shadowTypeHover);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove(shadowTypeHover);
              }}
            >
              <Icon />
              <p className="text-center text-sm font-semibold">{label}</p>
            </CustomButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;
