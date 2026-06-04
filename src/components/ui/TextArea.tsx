// Textarea component for multi-line input
// A11Y: proper label association

import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export default function TextArea({
    label,
    error,
    id,
    className = '',
    rows = 4,
    ...props
}: TextAreaProps) {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;

    return (
        <div className={`mb-4 ${className}`}>
            <label
                htmlFor={inputId}
                className="block text-sm font-medium text-slate-300 mb-2"
            >
                {label}
            </label>
            <textarea
                id={inputId}
                rows={rows}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={error ? 'true' : 'false'}
                className={`
          w-full px-4 py-3 rounded-lg
          bg-slate-800/50 border
          text-white placeholder-slate-400
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          resize-vertical
          ${error
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-slate-600 focus:border-emerald-500'
                    }
        `}
                {...props}
            />
            {error && (
                <p id={errorId} className="mt-2 text-sm text-red-400" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
