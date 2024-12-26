import { WEB_SERVICE_URL } from './constants';

// Ejemplo de como llamar variables de entorno
export const NotFoundPage = () => {
  return <div>NotFoundPage app on {WEB_SERVICE_URL}</div>;
};
