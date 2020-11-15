import React from 'react';
import UseState from '@components/hooks/UseState';
import UseReducer from '@components/hooks/UseReducer';
import UseEffect from '@components/hooks/UseEffect';
import UseContext from '@components/hooks/UseContext';

const Hooks = function Hooks() {
  return /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h2', null, 'Hooks'), /* #__PURE__ */React.createElement(UseState, null, 'useState'), /* #__PURE__ */React.createElement(UseReducer, null), /* #__PURE__ */React.createElement(UseEffect, null), /* #__PURE__ */React.createElement(UseContext, null));
};

export default Hooks;
