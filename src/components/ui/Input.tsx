// Form input component with label and validation
// A11Y: proper label association, aria-describedby for errors

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default function Input({
    label,
    error,
    id,
    className = '',
    ...props
}: InputProps) {
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
            <input
                id={inputId}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={error ? 'true' : 'false'}
                className={`
          w-full px-4 py-3 rounded-lg
          bg-slate-800/50 border
          text-white placeholder-slate-400
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-emerald-500
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
