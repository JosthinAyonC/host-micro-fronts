import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthRouting } from './modules/auth/AuthRouting';
import { RolesDePagoRouting } from './modules/roles/RolesDePagoRouting';
import { NotFoundPage } from './utils/NotFoundPage';

export const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRouting />} />
        <Route path="/roles/*" element={<RolesDePagoRouting />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
