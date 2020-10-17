import React, {
  InputHTMLAttributes, useEffect, useRef, useState, useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
}

const Input: React.FC<InputProps> = ({
  name, icon: Icon, ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  // Register Form
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  // -------

  // Handles
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current?.value === '') {
      setHasText(false);
    } else {
      setHasText(true);
    }
    // setHasText(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} hasText={hasText}>
      { Icon && <Icon size={20} /> }
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />
    </Container>
  );
};

export default Input;
