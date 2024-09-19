import * as React from "react";
import { cn } from "@/lib/utils";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, error, ...props }, ref) => {
    return (
      <div className="form-group">
        <label>{ label }</label>
        <input
          type={ type }
          className={ cn("form-control", className) }
          ref={ ref }
          { ...props }
        />
        { error && (
          <p className="b3 mt--10 tw-text-red-500">
            { error?.message && typeof error.message === 'string' ? error.message : "Invalid input" }
          </p>
        ) }
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
