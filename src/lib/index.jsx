import React from "react";
import PropTypes from "prop-types";

/**
 * Component for conditional render.
 *
 * @component
 * @example
 * return (
 *   <Conditional
 *      condition={userHasPermission}
 *      then={
 *        <p>
 *          Your password is EFD@#SDS
 *        </p>
 *      }
 *      else={
 *        <p>
 *          You don't have access
 *        </p>
 *      }
 *   />
 * )
 */
export const Conditional = (props) => {
  const { condition, then, else: _else } = props;

  return <>{condition ? <>{then}</> : <>{_else}</>}</>;
};

Conditional.propTypes = {
  condition: PropTypes.bool.isRequired,
  then: PropTypes.elementType.isRequired,
  else: PropTypes.elementType,
};
