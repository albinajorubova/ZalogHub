import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

interface UseTodoInputOptions {
  onAdd: (text: string) => boolean;
}

const useTodoInput = ({ onAdd }: UseTodoInputOptions) => {
  const [text, setText] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    if (hasError) setHasError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onAdd(text)) {
      setText('');
      setHasError(false);
    } else {
      setText('');
      setHasError(true);
    }
  };

  return {
    text,
    hasError,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
};

export default useTodoInput;
