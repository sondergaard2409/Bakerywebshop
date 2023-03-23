import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './components/style/theme';
import { GlobalStyles } from './components/style/global';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/provider/authprovider';

const ThemeMode = "black"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
        <themeProvider theme={Theme(ThemeMode)} >
            <GlobalStyles />
            <App />
            </themeProvider>
        </AuthProvider>    
      </BrowserRouter> 
  </React.StrictMode>
);