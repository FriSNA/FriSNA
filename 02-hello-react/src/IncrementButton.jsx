import PropTypes from "prop-types";

function IncrementButton({ setCount }) {
  return (
    <button onClick={() => setCount((prevValue) => prevValue + 1)}>+1</button>
  );
}

IncrementButton.propTypes = {
  setCount: PropTypes.func,
};

export default IncrementButton;
