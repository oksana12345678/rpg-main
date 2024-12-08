import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { ROLES } from 'constants/roles';
import { ROUTES } from 'constants/routes';
import signetSrc from 'assets/images/signet.png';
import parchmentSrc from 'assets/images/parchment.png';
import CustomButton from 'components/Buttons/CustomButton';

import userApi from 'store/user/userApi';

const RegisterPage = () => {
  const [role, setRole] = useState(0);

  const [createUserAccount] = userApi.useCreateUserAccountMutation();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await createUserAccount({ role: ROLES[role].value });
      navigate(ROUTES.PROFILE);
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-3">
      <p className="text-center text-xl font-semibold">Оберіть роль</p>

      <Swiper
        modules={[Pagination]}
        className="flex h-full w-full flex-1 items-center"
        centeredSlides={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => {
          setRole(swiper.activeIndex);
        }}
      >
        {ROLES.map(({ Icon, ...role }) => (
          <SwiperSlide className="flex max-h-[90%] items-center justify-center" key={role.value}>
            <div
              className="h-full max-h-[440px] w-[310px] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${parchmentSrc})` }}
            >
              <div className="relative z-10 flex h-full flex-col py-9">
                <Icon className="mx-auto h-[40%]" />

                <p className="py-2 text-center font-miamanueva text-2xl font-semibold text-black">
                  {role.label}
                </p>

                <p className="flex-1 overflow-auto pl-[15%] pr-[9%] font-miamanueva leading-7 text-black">
                  {role.description}
                </p>

                {role.isNeedModeration && (
                  <div
                    className="absolute -bottom-6 -right-5 flex h-24 w-24 items-center justify-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${signetSrc})` }}
                  >
                    <p className="text-yalow_accent mb-2 content-center px-2 text-center font-kobzar text-sm leading-4">
                      Роль потребує модерації
                    </p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <CustomButton onClick={handleSubmit} className="mb-7 w-[80%]">
        Обрати
      </CustomButton>
    </div>
  );
};

export default RegisterPage;
