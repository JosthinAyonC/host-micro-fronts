import React, { Suspense } from 'react';

import { AppRouting } from './AppRouting';

const App = React.lazy(() => import('micro/App'));
const MicroPageTest = React.lazy(() => import('micro/MicroPageTest'));

function HostApp() {
  return (
    <div className="bg-primary-dark">
      {/* Esta es la forma correcta de importar un componente desde un micro front end */}
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MicroPageTest label={'Hola desde aca'} />
      </Suspense>
      <AppRouting />
    </div>
  );
}

export default HostApp;
