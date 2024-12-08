import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, AppRootState } from './store';

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
