import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import ReactInputMask, { Props } from 'react-input-mask';

interface InputProps extends Props {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, mask, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        console.log(ref);
        if (ref.setInputValue) ref.setInputValue(value);
        else ref.value = value;
      },
      clearValue(ref: any) {
        if (ref.setInputValue) ref.setInputValue('');
        else ref.value = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      {mask ? (
        <ReactInputMask ref={inputRef} id={fieldName} defaultValue={defaultValue} mask={mask} {...rest} />
      ) : (
        <input ref={inputRef} id={fieldName} defaultValue={defaultValue} {...rest} />
      )}

      {error && <span style={{ color: 'var(--notification)' }}>{error}</span>}
    </Container>
  );
};

export default Input;
