import React, {
  InputHTMLAttributes, useEffect, useRef, useState, useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

import Tooltip from '../tooltip';

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
    setHasText(!!inputRef.current?.value);
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} hasText={hasText} hasError={!!error}>
      { Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />

      { error
      && (
        <Error title={error}>

          <FiAlertCircle size={20} color="#c53030" />

        </Error>
      ) }
    </Container>
  );
};

export default Input;
