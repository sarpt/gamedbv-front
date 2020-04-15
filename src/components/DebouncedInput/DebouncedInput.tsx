import React, { useEffect, ChangeEvent, useState } from 'react';
import { debounceTime } from 'rxjs/operators';


import { useSubject } from '../../hooks/useSubject';
import { Input } from './DebouncedInput.styles';

type props = {
  label: string,
  placeholder: string,
  initialValue: string,
  onChange: (newValue :string) => void,
  disabled: boolean,
};

const keystrokesDebounceTime = 1000;

export const DebouncedInput: React.FC<props> = ({ label, placeholder, initialValue, onChange, disabled }) => {
  const [value, setValue] = useState(initialValue);
  const [inputValue, setInputValue] = useSubject<string>();

  useEffect(() => {
    const subscription = inputValue
      .pipe(
        debounceTime(keystrokesDebounceTime),
      )
      .subscribe(newValue => {
        onChange(newValue);
      });

    return () => subscription.unsubscribe();
  }, [inputValue, onChange]);

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <Input
      variant="outlined"
      disabled={ disabled }
      onChange={ handleInputValueChange }
      value={ value }
      placeholder={ placeholder }
      label={ label }
    ></Input>
  );
};
