import styles from './Header.module.css';
import AddIcon from '@mui/icons-material/Add';
import { CalendarSlider } from '../CalendarSlider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { UserButton } from '../UI/Button';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Calendar</h1>
      <div className={styles.headerRow}>
        <button className={styles.addBtn} role="button">
          Add Note
        </button>
        <CalendarSlider />
      </div>
    </header>
  );
};
