import styles from './CalendarMonth.module.css';
import React from 'react';
import { CalendarDay } from '../CalendarDay';

export const CalendarMonth = ({ month }) => {
  return (
    <div className={styles.container}>
      <div className={styles.month}>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <CalendarDay day={day} key={idx} rowIdx={i} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
