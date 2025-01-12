import './card.css';
import { CardProps } from "./card.interfaces";

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={`card-base ${className}`} {...props}>{children}</div>
  )
}