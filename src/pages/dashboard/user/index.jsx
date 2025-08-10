import { DashboardNavbar } from '../../../components/dashboardNavbar';
import { Navigate, Outlet, useMatches } from 'react-router-dom';

export const DashboardUser = () => {
  const matches = useMatches();

  return (
    <div className="flex">
<<<<<<< HEAD
      {matches[2] == null ? <Navigate to={'charts'} /> : ''}
=======
      {matches[1] == null ? <Navigate to={'charts'} /> : ''}
>>>>>>> 7338874ae47fcf884bba715f04a901b91baac592
      <DashboardNavbar />
      <Outlet />
    </div>
  );
};
