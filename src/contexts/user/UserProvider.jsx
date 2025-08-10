import { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [dark, setDarkMode] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const [chartType, setTypeChart] = useState(
    localStorage.getItem('chartType') || 'bar'
  );

  useEffect(() => {
    localStorage.setItem('theme', dark);
    localStorage.setItem('chartType', chartType);
  }, [dark, chartType]);

  useEffect(() => {
    if (dark === 'light') {
      document.documentElement.style.setProperty('--grafite', '#1c1c1e');
      document.documentElement.style.setProperty('--terracota', '#c3593f');
      document.documentElement.style.setProperty('--musgo', '#81b29a');
      document.documentElement.style.setProperty('--areia', '#f4f1de');
      document.documentElement.style.setProperty('--bg', '#fff');
    } else {
      document.documentElement.style.setProperty('--grafite', '#1c1c1e'); 
      document.documentElement.style.setProperty('--terracota', '#a64b3f'); 
      document.documentElement.style.setProperty('--musgo', '#5f8566'); 
      document.documentElement.style.setProperty('--areia', '#d9d4c8');
      document.documentElement.style.setProperty('--bg', '#1e1e1e');
    }
  }, [dark]);

  return (
    <UserContext.Provider
      value={{ dark, setDarkMode, chartType, setTypeChart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
