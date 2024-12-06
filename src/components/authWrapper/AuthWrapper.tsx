import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { currentUserAction } from '../../store/thunk/authThunk.ts';
import SignIn from '../../pages/signIn/SignIn.tsx';
import ToastMessage, { ToastType } from '../toastMessage/ToastMessage.tsx';
import Header from '../header/Header.tsx';
import { Section, Box } from '@radix-ui/themes';
import Sidebar from '../sidebar/Sidebar.tsx';
import { BREAK_POINTS } from '../../core/constants.ts';
import { setWidth } from '../../store/slice/appSlice.ts';

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { loggedIn, currentUserLoading } = useSelector((state: RootState) => state.authSlice);
  const { open, type, message } = useSelector((state: RootState) => state.toastSlice);
  const { width } = useSelector((state: RootState) => state.appSlice);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWidth(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(currentUserAction());
  }, [dispatch]);

  return (
    <div style={{ padding: '8px' }}>
      {!loggedIn && !currentUserLoading && <SignIn />}
      {loggedIn && (
        <>
          <Header />
          <Section p="1" style={{ display: 'flex' }}>
            {width > BREAK_POINTS.M && <Sidebar />}
            <Box m="1" style={{ backgroundColor: 'pink', width: width <= BREAK_POINTS.M ? '100%' : '85%' }} p="1">
              {children}
            </Box>
          </Section>
        </>
      )}
      <ToastMessage open={open} type={type as ToastType['type']} message={message} />
    </div>
  );
};
