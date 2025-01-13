import { HTMLAttributes, ReactNode } from 'react';
import './card.css';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={`card-base ${className}`} {...props}>
      {children}
    </div>
  );
}
