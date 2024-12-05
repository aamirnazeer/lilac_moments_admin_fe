import { Text, Card, Flex, Heading, TextField, Button, Container, Spinner } from '@radix-ui/themes';
import { useSelector } from 'react-redux';
import { signInAction } from '../../store/thunk/authThunk.ts';
import { RootState, useAppDispatch } from '../../store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { resetToast, triggerToast } from '../../store/slice/toastSlice.ts';

type Inputs = {
  username: string;
  password: string;
};

export default function SignIn() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const { loading, error, errorMessage } = useSelector((state: RootState) => state.authSlice);

  useEffect(() => {
    if (error && errorMessage) dispatch(triggerToast({ open: true, type: 'error', message: errorMessage }));
    return () => {
      dispatch(resetToast());
    };
  }, [error, errorMessage, dispatch]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(signInAction(data));
  };

  return (
    <Container size="1">
      <Card size="4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="4">
            <Heading>Sign In</Heading>
            <Flex direction="column" gap="1">
              <Text as="label" htmlFor="username" weight="bold">
                Username
              </Text>
              <TextField.Root
                placeholder="Enter your username"
                id="username"
                {...register('username', { required: true })}
                disabled={loading}
              />
            </Flex>
            <Flex direction="column" gap="1">
              <Text as="label" htmlFor="password" weight="bold">
                Password
              </Text>
              <TextField.Root
                placeholder="Enter your password"
                id="password"
                type="password"
                {...register('password', { required: true })}
                disabled={loading}
              />
            </Flex>
            <Flex justify="end">
              <Button type="submit" disabled={loading}>
                {loading && <Spinner size="2" />}
                Sign In
              </Button>
            </Flex>
          </Flex>
        </form>
      </Card>
    </Container>
  );
}
