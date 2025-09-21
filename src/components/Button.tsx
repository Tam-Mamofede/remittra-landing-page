import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const CTAButton: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow-md transform transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-cyan-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
