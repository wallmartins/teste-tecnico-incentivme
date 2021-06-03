import { useState } from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,8}$/,
    message:
      'A senha precisa ter caracteres: maíusculos, minúsculos, digitos e especiais. Mínimo 4 e máximo 8 caracteres',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
};

const useValidateForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(targetValue) {
    if (type === false) return true;
    if (targetValue.length === 0) {
      setError('Preencha um valor.');
      return false;
    }
    if (types[type] && !types[type].regex.test(targetValue)) {
      setError(types[type].message);
      return false;
    }
    if (type === 'email') {
      if (localStorage.getItem(targetValue) === targetValue) {
        setError('Email já cadastrado!');
        return false;
      }

      localStorage.setItem(targetValue, targetValue);
      return true;
    }
    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useValidateForm;
