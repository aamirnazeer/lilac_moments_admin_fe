import { RootState, useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { currentUserAction } from '../store/thunk/authThunk.ts';
import SignIn from './SignIn.tsx';
import ToastMessage, { ToastType } from './Toast.tsx';

export const WrapperComponent = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { loading, loggedIn } = useSelector((state: RootState) => state.authSlice);
  const { open, type, message } = useSelector((state: RootState) => state.toastSlice);

  useEffect(() => {
    dispatch(currentUserAction());
  }, [dispatch]);

  if (loading) return;

  return (
    <>
      {!loggedIn && <SignIn />}
      {loggedIn && children}
      <ToastMessage open={open} type={type as ToastType['type']} message={message} />
    </>
  );
};
