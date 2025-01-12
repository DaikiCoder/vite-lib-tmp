import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export type ButtonVariant = 'elevated' | 'filled' | 'outlined' | 'text' | 'icon';
export type ButtonColor = 'primary' | 'secondary';
