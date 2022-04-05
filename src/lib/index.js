export const Conditional = (props) => {
  console.log(props);
  const { condition, ifTrueComponent, elseComponent } = props;

  return <>{condition ? <>{ifTrueComponent}</> : <>{elseComponent}</>}</>;
};
