import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// React 루트는 unmount()매서드를 사용해 DOM에서 마운트 해제할 수 있다
// root.unmount();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
