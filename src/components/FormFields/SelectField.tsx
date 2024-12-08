import {
  Listbox,
  ListboxProps,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Field,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { FieldError } from 'react-hook-form';
import { CustomError, CustomLabel } from './common';
import clsx from 'clsx';
type Option = {
  value: string;
  label: string;
};
type Props = {
  options: Option[];
  label?: string;
  error?: FieldError;
  placeholder?: string;
} & ListboxProps;

export default function SelectField({
  label,
  options,
  error,
  placeholder,
  value,
  ...props
}: Props) {
  const selectedLabel = options.find((option) => option.value === value)?.label || '';

  return (
    <Field>
      {label && <CustomLabel>{label}</CustomLabel>}

      <Listbox value={value} {...props}>
        <div className="relative mt-2">
          <ListboxButton
            className={clsx(
              'relative size-11 w-full cursor-default rounded-lg border py-1.5 pl-3 pr-10 text-left',
              error ? 'border-red-500' : 'focus:border-button_accent border-gray-700',
            )}
          >
            <p className="truncat ml-1 block text-gray-200">
              {selectedLabel ? selectedLabel : <span className="text-gray-400">{placeholder}</span>}
            </p>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </span>
          </ListboxButton>

          {error && <CustomError>{error.message}</CustomError>}

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-slate-300 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className="data-[focus]:bg-button_accent group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {option.label}
                  </span>
                </div>

                <span className="text-button_accent absolute inset-y-0 right-0 flex items-center pr-4 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
}
