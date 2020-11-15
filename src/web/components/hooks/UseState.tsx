import React, { useState } from 'react';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return; const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
const userArr = [{
  name: '小王',
  age: 30,
}, {
  name: '小吴',
  age: 18,
}, {
  name: '小帅',
  age: 21,
}];

const UseState = function UseState() {
  const _useState = useState(userArr[0]);
  const _useState2 = _slicedToArray(_useState, 2);
  const user = _useState2[0];
  const setUser = _useState2[1];

  const _useState3 = useState(0);
  const _useState4 = _slicedToArray(_useState3, 2);
  const index = _useState4[0];
  const setIndex = _useState4[1];

  const handleClickIndex = function handleClickIndex() {
    setIndex(index === 2 ? 0 : index + 1);
    setUser(userArr[index]);
  };

  return /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('button', {
    onClick: handleClickIndex,
  }, '\u70B9\u51FB\u66F4\u6362\u89D2\u8272'), /* #__PURE__ */React.createElement('div', null, user.name, ' ', '--', user.age));
};

export default UseState;
