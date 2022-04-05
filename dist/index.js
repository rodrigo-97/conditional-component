"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Conditional = void 0;

var Conditional = function Conditional(props) {
  console.log(props);
  var condition = props.condition,
      ifTrueComponent = props.ifTrueComponent,
      elseComponent = props.elseComponent;
  return /*#__PURE__*/React.createElement(React.Fragment, null, condition ? /*#__PURE__*/React.createElement(React.Fragment, null, ifTrueComponent) : /*#__PURE__*/React.createElement(React.Fragment, null, elseComponent));
};

exports.Conditional = Conditional;