import { useStableArray } from 'utils/useStableArray';
import academyApi from './academyApi';

export const useGetPreviewAvatars = (options?: RTKRequestOptions) => {
  const { data, ...rest } = academyApi.useGetPreviewAvatarsQuery({}, options);
  const avatars = useStableArray(data?.avatars);
  return { avatars, ...rest };
};
