import React from 'react';

function InputComponent({ value, onChange }) {
  debugger
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type something..."
    />
  );
}

export default InputComponent;
