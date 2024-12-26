import { Route, Routes } from 'react-router-dom';

import { RolesPage } from './pages/RolesPage';

export const RolesDePagoRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<RolesPage />}></Route>
    </Routes>
  );
};
