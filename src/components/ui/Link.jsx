const Link = ({ 
  href, 
  children, 
  className = '', 
  target,
  rel,
  ...rest 
}) => {
  // Your default Tailwind classes
  const defaultClasses = "relative text-blue-600 font-medium no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-600";
  
  // Combine default classes with any additional classes passed via props
  const combinedClasses = `${defaultClasses} ${className}`.trim();
  
  return (
    <a 
      href={href} 
      className={combinedClasses}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
