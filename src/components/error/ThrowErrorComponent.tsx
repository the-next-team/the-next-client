const ThrowErrorComponent = ({ name }: { [key: string]: string }) => {
  if (name !== "") throw Error("[ThrowErrorComponent] : Invalid name");
  return <h1>Hello, {name}!</h1>;
};

export default ThrowErrorComponent;
