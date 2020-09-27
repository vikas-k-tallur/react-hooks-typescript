import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import { getThemeByName } from '../../theme';
import ThemeContext from './themeContext';

const ThemeProvider: React.FC = (props) => {
    const [themeName, setThemeName] = useState('lightTheme');
    const theme = getThemeByName(themeName);

    return (
      <ThemeContext.Provider value={setThemeName}>
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </ThemeContext.Provider>
    );
}

export default ThemeProvider;