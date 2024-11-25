import { Flex, Text, Button } from '@radix-ui/themes';
import { signOutAction } from '../store/thunk/authThunk.ts';
import { useAppDispatch } from '../store';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const signOutHandler = () => {
    dispatch(signOutAction());
  };
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button onClick={signOutHandler}>Sign Out</Button>
    </Flex>
  );
};

export default Dashboard;
