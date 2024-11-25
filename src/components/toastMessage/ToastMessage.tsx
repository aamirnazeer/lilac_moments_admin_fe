import * as Toast from '@radix-ui/react-toast';
import styles from './styles.module.css';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Avatar } from '@radix-ui/themes';
import { resetToast } from '../../store/slice/toastSlice.ts';
import { useAppDispatch } from '../../store';
import ErrorSvg from '../../assets/img/cancel.svg';
import SuccessSvg from '../../assets/img/check-mark.svg';

export type ToastType = {
  open: boolean;
  type: 'success' | 'error';
  message?: string;
};

const ToastMessage = ({ open, type, message }: ToastType) => {
  const dispatch = useAppDispatch();

  const toastCloseHandler = () => {
    dispatch(resetToast());
  };

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className={styles.Root} open={open} duration={5000} onOpenChange={() => toastCloseHandler()}>
        <Toast.Title className={styles.Title}>
          <Avatar size="1" src={type === 'error' ? ErrorSvg : type === 'success' ? SuccessSvg : ''} fallback="" />
          {message}
        </Toast.Title>
        <Toast.Action className={styles.Action} asChild altText="close">
          <button className={styles.Button} onClick={toastCloseHandler}>
            <Cross1Icon />
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles.Viewport} />
    </Toast.Provider>
  );
};

export default ToastMessage;
