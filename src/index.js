import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './compounents/app/App';
import { store } from './compounents/redux/store';
import { Provider } from 'react-redux';


const root = createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>);



