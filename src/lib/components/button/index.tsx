import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export type ButtonVariant = 'elevated' | 'filled' | 'outlined' | 'text' | 'icon';
export type ButtonColor = 'primary' | 'secondary';


export function Button({
  children,
  className = '',
  variant = 'filled',
  color = 'primary',
  ...props
}: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    elevated: 'btn-elevated',
    filled: 'btn-filled',
    outlined: 'btn-outlined',
    text: 'btn-text',
    icon: 'btn-icon',
  };
  const variantClass = variantClasses[variant];

  return (
    <button type="button" className={`${variantClass} ${color} ${className}`} {...props}>
      {children}
    </button>
  );
}
