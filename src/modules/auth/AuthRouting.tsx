import { Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '../../utils';
import { Login, Logout } from './pages';

export const AuthRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<NotFoundPage />} />
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
};
