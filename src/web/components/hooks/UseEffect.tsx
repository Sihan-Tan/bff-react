import React, { useEffect, useState } from 'react';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return; const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const UseEffect = function UseEffect() {
  const initialCount = 10;

  const _useState = useState(initialCount);
  const _useState2 = _slicedToArray(_useState, 2);
  const count = _useState2[0];
  const setCount = _useState2[1]; // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    // Update the document title using the browser API
    document.title = 'You clicked '.concat(count, ' times');
    return function () {
      document.title = 'reset title';
    };
  });
  return /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('p', null, 'You clicked', count, ' ', 'times'), /* #__PURE__ */React.createElement('button', {
    onClick: function onClick() {
      return setCount(initialCount);
    },
  }, 'Reset'), /* #__PURE__ */React.createElement('button', {
    onClick: function onClick() {
      return setCount((prevCount) => prevCount - 1);
    },
  }, '-'), /* #__PURE__ */React.createElement('button', {
    onClick: function onClick() {
      return setCount((prevCount) => prevCount + 1);
    },
  }, '+'));
};

export default UseEffect;
