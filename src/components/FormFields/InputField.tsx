import { Field, Input, InputProps } from '@headlessui/react';
import clsx from 'clsx';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { CustomLabel, CustomError } from './common';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
type FormFieldProps = {
  label?: string;
  type?: InputProps['type'];
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
};

const InputField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  register,
  name,
  error,
}) => {
  const [isShowPassword, setIsShowPasword] = useState(type !== 'password');
  const PasswordIcon = isShowPassword ? EyeSlashIcon : EyeIcon;
  return (
    <Field className="relative w-full">
      {label && <CustomLabel>{label}</CustomLabel>}
      <Input
        as="input"
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder}
        {...register(name)}
        className={clsx(
          'w-full rounded-lg border bg-transparent px-4 py-2 text-gray-200 focus:outline-none',
          error ? 'border-red-500' : 'focus:border-button_accent border-gray-700',
        )}
      />
      {type === 'password' && (
        <span className="absolute right-0 p-2.5" onClick={() => setIsShowPasword(!isShowPassword)}>
          <PasswordIcon className="h-5 w-5" />
        </span>
      )}
      {error && <CustomError>{error.message}</CustomError>}
    </Field>
  );
};

export default InputField;
