import PropTypes from "prop-types";

export default function ResetButton(props) {
  const handleClick = () => {
    props.setCount(props.initialValue);
  };

  return <button onClick={handleClick}>Reset</button>;
}

ResetButton.propTypes = {
  setCount: PropTypes.func.isRequired,
  initialValue: PropTypes.number,
};
