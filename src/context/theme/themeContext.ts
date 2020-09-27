import React from 'react';
 
export const ThemeContext = React.createContext((themeName: string): void => {});
 
export default ThemeContext;