import { useState } from "react";

function Toggle(props) {
  const [toggle, setToggle] = useState(false);
  const { children } = props;
  const settoggle = () => setToggle(!toggle);
  return children({ toggle, settoggle });
}

export default Toggle;
