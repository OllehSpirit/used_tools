import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AllContextProvider } from './Store/Context'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AllContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AllContextProvider>
);
