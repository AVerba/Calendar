import styles from './Header.module.css';
import AddIcon from '@mui/icons-material/Add';
import { CalendarSlider } from '../CalendarSlider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { UserButton } from '../UI/Button';
import { useState } from 'react';
import { AddNote } from '../Modal/AddNote';

export const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Calendar</h1>
      <div className={styles.headerRow}>
        <button className={styles.addBtn} onClick={() => setModalShow(true)}>
          Add Note
        </button>
        <CalendarSlider />
        <AddNote show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </header>
  );
};
