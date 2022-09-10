import styles from './MainView.module.css';
import { getMonth } from '../../utils';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { CalendarMonth } from '../../components/CalendarMonth';

export const MainView = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  console.log('cur', currenMonth);
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return <CalendarMonth month={currenMonth} />;
};
