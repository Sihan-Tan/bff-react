import React, { useContext, createContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
const ThemeContext = /* #__PURE__ */createContext(themes.light);

function Toolbar() {
  return /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(ThemedButton, null));
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return /* #__PURE__ */React.createElement('button', {
    style: {
      background: theme.background,
      color: theme.foreground,
    },
  }, 'I am styled by theme context!');
}

const App = function App() {
  return /* #__PURE__ */React.createElement(ThemeContext.Provider, {
    value: themes.dark,
  }, /* #__PURE__ */React.createElement(Toolbar, null));
};

export default App;
