// UI Button component with primary/secondary/outline variants
// SEO: semantic button element with accessible focus states
// A11Y: proper focus-visible, aria support

import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  target,
  rel,
  title,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants: Record<ButtonVariant, string> = {
    primary: `
      bg-gradient-to-r from-emerald-500 to-teal-600 text-white
      hover:from-emerald-600 hover:to-teal-700
      focus-visible:ring-emerald-500
      shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30
    `,
    secondary: `
      bg-gradient-to-r from-indigo-500 to-purple-600 text-white
      hover:from-indigo-600 hover:to-purple-700
      focus-visible:ring-indigo-500
      shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30
    `,
    outline: `
      border-2 border-emerald-500 text-emerald-500
      hover:bg-emerald-500 hover:text-white
      focus-visible:ring-emerald-500
    `,
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  // A11Y: If href provided, render as anchor for proper semantics
  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : { target, rel };
    return (
      <a href={href} className={classes} title={title} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
