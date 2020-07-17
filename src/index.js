import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from './firebase-config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirebaseAppProvider } from 'reactfire'
import 'antd/dist/antd.css';
import './index.css'

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <Suspense fallback={'Conectando con Sofi Clothes...'}>
        <App />
      </Suspense>
    </React.StrictMode>
  </FirebaseAppProvider>
), document.getElementById('root')
);
