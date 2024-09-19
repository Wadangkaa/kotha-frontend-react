import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface SelectProps {
  label: string;
  children: React.ReactNode;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ onChange, label, children, error, ...props }, ref) => {
    return (
      <div className="form-group mb--40">
        <label>{ label }</label>
        <select className="select2" onChange={ onChange } { ...props } ref={ ref }>
          { children }
        </select>
        { error && (
          <p className="b3 mt--10 tw-text-red-500">
            { error?.message && typeof error.message === 'string' ? error.message : "Invalid input" }
          </p>
        ) }
      </div>
    );
  }
);

export default Select;
