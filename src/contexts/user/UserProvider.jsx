import { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [dark, setDarkMode] = useState(localStorage.getItem('theme') || 'light');
  const [chartType, setTypeChart] = useState(localStorage.getItem('chartType') || 'bar');

  useEffect(() => {
    localStorage.setItem('theme', dark);
    localStorage.setItem('chartType', chartType);
  }, [dark, chartType]);

  return <UserContext.Provider value={{ dark, setDarkMode, chartType, setTypeChart }}>{children}</UserContext.Provider>;
};

export default UserProvider;
