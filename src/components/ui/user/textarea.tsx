import * as React from "react";
import { FieldError } from "react-hook-form";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError | any;  // Allow for more flexibility with error types
  label: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <>
        <div className="form-group">
          <label>{ label }</label>
          <textarea
            className={ `form-control ${error ? "border-red-500" : ""}` }
            ref={ ref }
            { ...props }
          />
        </div>
        { error && (
          <p className="b3 mt--10 tw-text-red-500">
            { error?.message && typeof error.message === 'string' ? error.message : "Invalid input" }
          </p>
        ) }
      </>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
