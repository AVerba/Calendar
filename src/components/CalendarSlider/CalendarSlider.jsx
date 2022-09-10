import styles from './CalendarSlider.module.css';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UserButton } from '../UI/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const CalendarSlider = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <div className={styles.slider}>
      <UserButton className={styles.todayBtn} onClick={handleReset}>
        Today
      </UserButton>
      <button className={styles.navBtn} onClick={handlePrevMonth}>
        <ChevronLeftIcon />
      </button>
      <h2 className={styles.monthLabel}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
      <button className={styles.navBtn} onClick={handleNextMonth}>
        <ChevronRightIcon />
      </button>
      <UserButton className={styles.smCalendarBtn}>
        <CalendarMonthIcon className={styles.smCalendarIcon} />
      </UserButton>
    </div>
  );
};
