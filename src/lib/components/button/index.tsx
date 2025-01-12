import './button.css';
import { ButtonProps, ButtonVariant } from './button.interfaces';

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
