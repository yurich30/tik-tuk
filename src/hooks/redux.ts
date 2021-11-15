import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const redux = () => useDispatch<AppDispatch>();

export const useAppSelector = () => useSelector<RootState>();
