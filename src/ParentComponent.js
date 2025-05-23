import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import DisplayComponent from './components/DisplayComponent';

function ParentComponent() {
  const [text, setText] = useState(''); // state in parent component

  return (
    <div>
      <h2>Lifting State Up Example</h2>
      <InputComponent value={text} onChange={setText} />
      <DisplayComponent value={text} />
    </div>
  );
}

export default ParentComponent;
