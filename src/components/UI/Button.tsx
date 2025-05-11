import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded transition-colors duration-300 inline-flex items-center justify-center';
  const variantStyles = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-700',
    secondary: 'bg-amber-600 text-white hover:bg-amber-500 focus:ring-amber-400',
    outline: 'border border-blue-900 text-blue-900 hover:bg-blue-50 focus:ring-blue-200'
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : 'focus:ring-2 focus:outline-none';
  return <button type={type} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>;
};
export default Button;