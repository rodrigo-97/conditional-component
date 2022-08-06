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
 *        <>
 *          Your password is EFD@#SDS
 *        </>
 *      }
 *      else={
 *        <>
 *          You don't have access
 *        </>
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
