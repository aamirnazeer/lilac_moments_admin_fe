import { Button, DropdownMenu, Flex, Section, Text } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import styles from './styles.module.css';
import { RootState, useAppDispatch } from '../../store';
import { signOutAction } from '../../store/thunk/authThunk.ts';
import { BREAK_POINTS, TABS } from '../../core/constants.ts';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useAppDispatch();
  const { width } = useSelector((state: RootState) => state.appSlice);

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  return (
    <Section size="1" p="4" className={styles.header} asChild={true}>
      <header>
        <Flex gap="3">
          <Text as="p">Lilac Moments</Text>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" className={styles.hamburger}>
                <HamburgerMenuIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {width <= BREAK_POINTS.M ? (
                <>
                  {TABS.map((el) => {
                    return <DropdownMenu.Item>{el.name}</DropdownMenu.Item>;
                  })}
                  <DropdownMenu.Separator />
                </>
              ) : null}
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red" onClick={signOutHandler}>
                Sign Out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </header>
    </Section>
  );
};

export default Header;
