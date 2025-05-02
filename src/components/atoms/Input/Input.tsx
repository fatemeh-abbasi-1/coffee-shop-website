const Input = ({ type }) => {
  return <input type={type === "text" ? "text " : "password"}></input>;
  
};

export default Input;
