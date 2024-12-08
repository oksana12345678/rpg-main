import CustomButton from 'components/Buttons/CustomButton';
import useApplyBackButton from 'hooks/useApplyBackButton';

import userApi from 'store/user/userApi';

import { useAppSelector } from 'store/hooks';

const SettingsPage = () => {
  useApplyBackButton({});

  const userId = useAppSelector((state) => state.user.user?.telegramId);

  const [deleteUserAccount, { isLoading }] = userApi.useDeleteUserAccountMutation();

  const handleRemove = async () => {
    if (!userId) {
      console.error('User ID not found');
      return;
    }

    try {
      // Delete user from the API
      await deleteUserAccount(userId).unwrap();
      // Reload the page or redirect if successfull
      window.location.reload();
    } catch (error) {
      window.location.reload();
    }
  };

  return (
    <div className="flex h-full w-full flex-1 flex-col justify-end">
      <CustomButton
        onClick={handleRemove}
        loading={isLoading}
        className="mb-7 w-[80%] border-red-400 from-red-600 to-red-500 text-xl font-semibold"
      >
        Видалити акаунт
      </CustomButton>
    </div>
  );
};

export default SettingsPage;
