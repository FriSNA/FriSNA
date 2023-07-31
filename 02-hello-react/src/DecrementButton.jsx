import PropTypes from "prop-types";
import { useEffect } from "react";

export default function DecrementButton(props) {
  const handleClick = () => {
    props.setCount((count) => (!count ? count : count - 1));
  };

  useEffect(() => {
    console.log("Hola, soy un botón");
    return () => {
      console.log("Soy un botón y estoy desapareciendo :(");
    };
  }, []);

  useEffect(() => {
    console.log("El count ha cambiado");
  }, [props.count]);

  return <button onClick={handleClick}>-1</button>;
}

DecrementButton.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};
