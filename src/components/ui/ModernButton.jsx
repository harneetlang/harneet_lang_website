import React from 'react';
import { motion } from 'framer-motion';

const ModernButton = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-blue-500/20',
    secondary: 'bg-gray-800 text-gray-200 hover:bg-gray-700 focus:ring-gray-500 border border-gray-700 hover:border-gray-600',
    accent: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500 shadow-lg hover:shadow-indigo-500/20',
    ghost: 'text-gray-300 hover:bg-gray-800 focus:ring-gray-500',
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

export default ModernButton;
