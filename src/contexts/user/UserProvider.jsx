import { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [dark, setDarkMode] = useState('');
  const [chartType, setTypeChart] = useState('');

  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') || 'light');
    setTypeChart(localStorage.getItem('chartType') || 'bar');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', dark);
    localStorage.setItem('chartType', chartType);
  }, [dark, chartType]);

  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserProvider;
