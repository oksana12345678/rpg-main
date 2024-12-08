import { useAppSelector } from 'store/hooks';

const useIsAuth = () => {
  const user = useAppSelector((state) => state.user.user);
  //const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return {
    isLoading: !!user,
    //isAuthenticated,
  };
};

export default useIsAuth;
