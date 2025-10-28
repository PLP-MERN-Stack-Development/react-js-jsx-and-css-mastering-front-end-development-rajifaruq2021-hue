import React from 'react';

// Define the types for our props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyle = "font-bold py-2 px-4 rounded transition-transform transform hover:scale-105";

  const styles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;