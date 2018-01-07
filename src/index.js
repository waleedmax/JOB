import React from 'react';
import ReactDOM from 'react-dom';
import './pages/Form';
import './index.css';
import * as Waleed from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const config = {
    apiKey: "AIzaSyBumGLcrolGxaOopl3tFCHfseLMueEn2ME",
    authDomain: "waleed-8be81.firebaseapp.com",
    databaseURL: "https://waleed-8be81.firebaseio.com",
    projectId: "waleed-8be81",
    storageBucket: "waleed-8be81.appspot.com",
    messagingSenderId: "529786173366"
  };




   Waleed.initializeApp(config);





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
