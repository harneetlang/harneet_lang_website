import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'relative flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050506]';

  const variants = {
    primary:
      'bg-[linear-gradient(135deg,#2b2b2f,#151517)] text-[#f5f5f7] border border-[#3a3a3c]/70 shadow-[0_14px_32px_rgba(0,0,0,0.55)] hover:bg-[linear-gradient(135deg,#323236,#18181a)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] active:shadow-[0_8px_20px_rgba(0,0,0,0.55)] focus:ring-[#303034]',
    secondary:
      'bg-[#1c1c1e] text-[#d1d1d6] border border-[#2c2c2e] shadow-[0_8px_18px_rgba(0,0,0,0.35)] hover:bg-[#2c2c2e] hover:text-[#f2f2f7] focus:ring-[#3a3a3c]',
    accent:
      'bg-[linear-gradient(135deg,#4f46e5,#7c3aed)] text-white shadow-[0_14px_32px_rgba(76,29,149,0.45)] hover:bg-[linear-gradient(135deg,#5b51f0,#8750f5)] focus:ring-[#5b51f0]',
    ghost:
      'text-[#8e8e93] border border-transparent hover:border-[#2c2c2e] hover:bg-[#1a1a1c] hover:text-[#f5f5f7] focus:ring-[#3a3a3c]',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const iconMargins = {
    sm: 'mr-1.5',
    md: 'mr-2',
    lg: 'mr-2.5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={`${iconSizes[size]} ${iconMargins[size]}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizes[size]} ${iconMargins[size].replace('mr-', 'ml-')}`} />
      )}
    </motion.button>
  );
};

export default Button;
