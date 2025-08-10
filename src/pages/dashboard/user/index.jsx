import { DashboardNavbar } from '../../../components/dashboardNavbar';
import { Navigate, Outlet, useMatches } from 'react-router-dom';

export const DashboardUser = () => {
  const matches = useMatches();

  return (
    <div className="flex">
      {matches[1] == null ? <Navigate to={'charts'} /> : ''}
      <DashboardNavbar />
      <Outlet />
    </div>
  );
};
