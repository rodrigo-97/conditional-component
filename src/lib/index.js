import React from "react";
import PropTypes from 'prop-types'
export const Conditional = (props) => {
  const { condition, ifTrueComponent, elseComponent } = props;

  return <>{condition ? <>{ifTrueComponent}</> : <>{elseComponent}</>}</>;
};


Conditional.propTypes = {
  condition: PropTypes.any.isRequired,
  ifTrueComponent: PropTypes.element.isRequired,
  elseComponent: PropTypes.element,
}