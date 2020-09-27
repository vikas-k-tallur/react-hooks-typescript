import React from 'react';
import ThemeProvider from './context/theme/themeProvider';
import Routes from './routes/router';
import AuthProvider from './context/auth/authProvider';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;