function IncrementButton(props) {
  return (
    <button onClick={() => props.setCount((prevValue) => prevValue + 1)}>
      +1
    </button>
  );
}

export default IncrementButton;
