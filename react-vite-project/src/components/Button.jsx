/* eslint-disable react/prop-types */
export default function Button({ children, onTouch }) {
  return (
    <>
      <button onClick={onTouch}>{children}</button>
    </>
  );
}
