import * as React from "react"

import { cn } from "@/lib/utils"
import { FieldError } from "react-hook-form"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError | undefined
  label: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <>
        <div className="form-group">
          <label>{ label }</label>
          <textarea { ...props }></textarea>
        </div>
        { error && (
          <p className="tw-text-red-500 tw-text-xs mt-1">
            { error.message }
          </p>
        ) }
      </>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
