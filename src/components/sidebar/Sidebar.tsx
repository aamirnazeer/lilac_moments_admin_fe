import { Box } from '@radix-ui/themes';
import styles from './styles.module.css';
import { TABS } from '../../core/constants.ts';

const Sidebar = () => {
  return (
    <Box className={styles.sidebar} m="1" p="1">
      {TABS.map((el) => {
        return <p>{el.name}</p>;
      })}
    </Box>
  );
};

export default Sidebar;
