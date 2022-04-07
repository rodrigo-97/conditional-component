"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Conditional = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Conditional = function Conditional(props) {
  console.log(props);
  var condition = props.condition,
      ifTrueComponent = props.ifTrueComponent,
      elseComponent = props.elseComponent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, condition ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ifTrueComponent) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, elseComponent));
};

exports.Conditional = Conditional;
Conditional.propTypes = {
  condition: _propTypes.default.any.isRequired,
  ifTrueComponent: _propTypes.default.element.isRequired,
  elseComponent: _propTypes.default.element
};