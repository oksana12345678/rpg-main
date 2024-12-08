import { useEffect, useState } from 'react';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import userApi from 'store/user/userApi';
import userActions from 'store/user/userSlice';
import questsApi from 'store/quests/questsApi';
import { useAppDispatch } from 'store/hooks';
import { ROUTES } from 'constants/routes';
import TelegramSetup from 'components/TelegramSetup';
import LoadingScreen from 'components/loadingScreen/LoadingScreen';

const RootPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { initDataRaw } = useLaunchParams();
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    if (initDataRaw) {
      dispatch(userActions.setInitDataRaw(initDataRaw));

      const initiateLogin = async () => {
        const login = async () => {
          try {
            const { data, isError, error } = await dispatch(
              userApi.endpoints.getUserAccount.initiate(),
            );
            await dispatch(questsApi.endpoints.getAllQuests.initiate({}));
            if (isError && (error as FetchBaseQueryError).status === 401) {
              navigate(ROUTES.REGISTER);
            }
            if (data?.user) {
              navigate(ROUTES.PROFILE);
            }
          } catch (error) {
            return null;
          }
        };
        await login();

        // Create a 2-second delay promise
        const delayPromise = new Promise<void>((resolve) => setTimeout(resolve, 2000));

        // Wait for both login and delay to complete
        await Promise.all([login, delayPromise]);

        // Set loading to false after both have finished
        setInitLoading(false);
      };

      initiateLogin();
    }
  }, [dispatch, initDataRaw, navigate]);

  return (
    <>
      <TelegramSetup />
      {initLoading ? <LoadingScreen /> : <Outlet />}
    </>
  );
};

export default RootPage;
