import React, { useReducer } from 'react';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return; const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload,
      };

    case 'decrement':
      return {
        count: state.count - Number(action.payload),
      };

    default:
      throw new Error();
  }
}

const UseReducer = function UseReducer() {
  const _useReducer = useReducer(reducer, initialState);
  const _useReducer2 = _slicedToArray(_useReducer, 2);
  const state = _useReducer2[0];
  const dispatch = _useReducer2[1];

  const style = {
    marginTop: '10px',
  };
  return /* #__PURE__ */React.createElement('div', {
    style,
  }, 'Count:', ' ', state.count, /* #__PURE__ */React.createElement('button', {
    onClick: function onClick() {
      return dispatch({
        type: 'decrement',
        payload: '5',
      });
    },
  }, '-'), /* #__PURE__ */React.createElement('button', {
    onClick: function onClick() {
      return dispatch({
        type: 'increment',
        payload: 5,
      });
    },
  }, '+'));
};

export default UseReducer;
