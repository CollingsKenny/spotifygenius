import React, { useState, useEffect } from 'react';

const Input = ({ name, value, onChange, validate }) => {
  const [state, setState] = useState({
    value: '',
    valid: true,
    typeMismatch: false,
    error: '',
  });

  useEffect(() => {
    const validValue = validate(value);
    setState({ ...state, value: validValue });
  }, [value]);

  return (
    <div>
      <p>{state.error}</p>
      <input name={name} value={state.value} onChange={onChange} />
    </div>
  );
};

export default Input;
