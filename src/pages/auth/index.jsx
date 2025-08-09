import { Outlet, useMatches, Navigate } from 'react-router-dom';
import backgroundImage from './assets/background.svg';

export const Auth = () => {
  const matches = useMatches();
  const hasChildRoute = matches.some((match) => match.pathname !== '/auth');

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {hasChildRoute ? <Outlet /> : <Navigate to="login" />}
    </div>
  );
};
